/**
 * @module gateway/restWithSearch
 */

/** @typedef {function(JQuery.AjaxSettings=): JQuery.jqXHR} Ajax */

import restGatewayCreator from './rest.js';
import { previewTypes } from '../preview/model';

/**
 * Wraps an instance of the restbase gateway with an opensearch api call,
 * hard-coded to use the English wikipedia; if there is a page that is found
 * from that call, restbase is then used to render that page; if there are
 * no results, modifies the link element to indicate that, so further attempts
 * to query are skipped, and rejects with the special code
 * `opensearch-no-results` so that no failure popup is shown.
 *
 * @param {Ajax} ajax A function with the same signature as `jQuery.ajax`
 * @param {Object} config Configuration that affects the major behavior of the
 *  gateway.
 * @param {Function} extractParser A function that takes response and returns
 *  parsed extract
 * @param {mw.ForeignApi} enwikiAPI
 * @return {Gateway}
 */
export default function createRestOpenSearchGateWay(
	ajax,
	config,
	extractParser,
	enwikiAPI
) {

	const restParts = restGatewayCreator( ajax, config, extractParser );

	/**
	 * We need to export a fetch() method, but I don't think it actually gets
	 * used directly, which is good since we need 2 fetches, so just don't
	 * allow using it
	 */
	function fetch() {
		throw new Error( 'Rest+Search fetch() should not be used!' );
	}

	/**
	 * Update model link to point to the English Wikipedia, SEL-1348
	 *
	 * @param {PagePreviewModel} model
	 * @return {PagePreviewModel}
	 */
	function updatePreviewLink( model ) {
		const uri = new mw.Uri( model.url );
		// Point to the English Wikipedia and use https
		uri.host = 'en.wikipedia.org';
		uri.protocol = 'https';
		// Drop some parts that might be set from the local wiki
		uri.password = undefined;
		uri.port = undefined;
		model.url = uri.toString();
		return model;
	}

	/**
	 * Wrapper around the rest base implementation of fetchPreviewForTitle(),
	 * except that we also need to update the link URLs, SEL-1348
	 *
	 * @param {mw.Title} title
	 * @param {HTMLAnchorElement} link
	 * @return {AbortPromise<PagePreviewModel>}
	 */
	function fetchPreviewForTitle( title, link ) {
		// No need to do the lookup multiple times
		if ( link.hasAttribute( 'opensearch-results' ) ) {
			const foundTitle = link.getAttribute( 'opensearch-results' );
			// If we know that there is no title, just skip, but without showing
			// an error. Ideally, we wouldn't even try to fetch the preview and
			// get to this function in such a case, but we cannot just skip
			// such cases in the creation of titles from elements (title.js)
			// since we also need to work when the user moves off of the link
			// with no results the first time
			if ( foundTitle === '' ) {
				return $.Deferred().reject( 'opensearch-no-results' );
			}
			return restParts.fetchPreviewForTitle(
				new mw.Title( foundTitle ),
				link
			).then( ( model ) => updatePreviewLink( model ) );
		}

		return enwikiAPI.get( {
			action: 'opensearch',
			search: title.getPrefixedDb(),
			limit: '1'
		} ).then(
			( data ) => {
				if ( data.length !== 4 ) {
					link.setAttribute( 'opensearch-results', '' );
					return $.Deferred().reject( 'opensearch-no-results' );
				}
				const pageNames = data[ 1 ];
				if ( !Array.isArray( pageNames ) || pageNames.length === 0 ) {
					link.setAttribute( 'opensearch-results', '' );
					return $.Deferred().reject( 'opensearch-no-results' );
				}
				const pageName = pageNames[ 0 ];
				link.setAttribute( 'opensearch-results', pageName );
				return restParts.fetchPreviewForTitle(
					new mw.Title( pageName )
				).then( ( model ) => {
					if ( model.type === previewTypes.TYPE_GENERIC ||
						model.type === previewTypes.TYPE_DISAMBIGUATION
					) {
						// For pages with no summary to show, we don't show a
						// popup at all - just reuse the logic from if there
						// were no search results, which will also prevent
						// future rendering attempts
						// Same with disambiguation pages
						link.setAttribute( 'opensearch-results', '' );
						return $.Deferred().reject( 'opensearch-no-results' );
					}
					return updatePreviewLink( model );
				} );
			},
			// catch() handler, but NOT attaching with .catch() because we do
			// not want this to catch the rejections with opensearch-no-results
			// that are set up above
			( jqXHR, textStatus, errorThrown ) => {
				// Match the default rest handling
				return $.Deferred().reject( 'http', {
					xhr: jqXHR,
					textStatus,
					exception: errorThrown
				} );
			}
		).promise( { abort() { enwikiAPI.abort(); } } );
	}

	return {
		fetch,
		convertPageToModel: restParts.convertPageToModel,
		fetchPreviewForTitle
	};
}
