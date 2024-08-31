/**
 * @module gateway/page
 */

import constants from '../constants';
import createMediaWikiApiGateway from './mediawiki';
import createRESTBaseGateway from './rest';
import createRestOpenSearchGateWay from './restWithSearch';
import * as formatters from './restFormatters';

/**
 * Creates a page preview gateway with sensible values for the dependencies.
 *
 * @param {mw.Map} config
 * @return {Gateway}
 */
export default function createPagePreviewGateway( config ) {
	const gatewayConfig = $.extend( {}, constants, {
		acceptLanguage: config.get( 'wgPageContentLanguage' )
	} );
	const restConfig = $.extend( {}, gatewayConfig, {
		endpoint: config.get( 'wgPopupsRestGatewayEndpoint' )
	} );
	switch ( config.get( 'wgPopupsGateway' ) ) {
		case 'mwApiPlain':
			return createMediaWikiApiGateway( new mw.Api(), gatewayConfig );
		case 'restbasePlain':
			return createRESTBaseGateway(
				$.ajax, restConfig, formatters.parsePlainTextResponse );
		case 'restbaseWithSearch':
			return createRestOpenSearchGateWay(
				$.ajax,
				restConfig,
				formatters.parsePlainTextResponse,
				new mw.ForeignApi(
					'//en.wikipedia.org/w/api.php',
					{ anonymous: true }
				)
			);
		case 'restbaseHTML':
			return createRESTBaseGateway(
				$.ajax, restConfig, formatters.parseHTMLResponse );
		default:
			throw new Error( 'Unknown gateway' );
	}
}
