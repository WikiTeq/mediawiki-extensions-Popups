var mw = window.mediaWiki;

/**
 * Gets the title of a local page from an href given some configuration.
 *
 * @param {String} href
 * @param {mw.Map} config
 * @return {String|undefined}
 */
function getTitle( href, config ) {
	var linkHref,
		matches,
		queryLength,
		titleRegex = new RegExp( mw.RegExp.escape( config.get( 'wgArticlePath' ) )
			.replace( '\\$1', '(.+)' ) );

	// Skip every URI that mw.Uri cannot parse
	try {
		linkHref = new mw.Uri( href );
	} catch ( e ) {
		return undefined;
	}

	// External links
	if ( linkHref.host !== location.hostname ) {
		return undefined;
	}

	queryLength = Object.keys( linkHref.query ).length;

	// No query params (pretty URL)
	if ( !queryLength ) {
		matches = titleRegex.exec( linkHref.path );
		return matches ? decodeURIComponent( matches[ 1 ] ) : undefined;
	} else if ( queryLength === 1 && linkHref.query.hasOwnProperty( 'title' ) ) {
		// URL is not pretty, but only has a `title` parameter
		return linkHref.query.title;
	}

	return undefined;
}

module.exports = getTitle;