import actionTypes from '../actionTypes';
import nextState from './nextState';

/**
 * Reducer for actions that modify the state of the preview model
 *
 * @param {Object|undefined} state before action
 * @param {Object} action Redux action that modified state.
 *  Must have `type` property.
 * @return {Object} state after action
 */
export default function preview( state, action ) {
	if ( state === undefined ) {
		state = {
			enabled: {},
			activeLink: undefined,
			previewType: undefined,
			measures: undefined,
			activeToken: '',
			shouldShow: false,
			isUserDwelling: false,
			wasClicked: false
		};
	}

	switch ( action.type ) {
		case actionTypes.BOOT:
			return nextState( state, {
				enabled: action.initiallyEnabled
			} );

		case actionTypes.SETTINGS_CHANGE: {
			return nextState( state, {
				enabled: action.newValue
			} );
		}

		case actionTypes.LINK_DWELL:
			if ( action.el !== state.activeLink ) {
				// New interaction
				return nextState( state, {
					activeLink: action.el,
					previewType: action.previewType,
					measures: action.measures,
					activeToken: action.token,

					// When the user dwells on a link with their keyboard, a preview is
					// renderered, and then dwells on another link, the ABANDON_END
					// action will be ignored.
					//
					// Ensure that all the preview is hidden.
					shouldShow: false,

					isUserDwelling: true,
					promise: action.promise
				} );
			}
			// Dwelling back into the same link.
			return nextState( state, {
				isUserDwelling: true
			} );

		case actionTypes.FETCH_ABORTED:
		case actionTypes.ABANDON_END:
			if ( action.token === state.activeToken && !state.isUserDwelling ) {
				return nextState( state, {
					activeLink: undefined,
					previewType: undefined,
					activeToken: undefined,
					measures: undefined,
					fetchResponse: undefined,
					shouldShow: false
				} );
			}
			return state;

		case actionTypes.PREVIEW_DWELL:
			return nextState( state, {
				isUserDwelling: true
			} );

		case actionTypes.ABANDON_START:
			return nextState( state, {
				isUserDwelling: false,
				wasClicked: false
			} );

		case actionTypes.FETCH_START:
			return nextState( state, {
				fetchResponse: undefined,
				promise: action.promise
			} );

		case actionTypes.FETCH_FAILED:
			// If the fetch failed and now the element has the
			// `opensearch-results` attribute as an empty string, we should
			// immediately restore the `title` text by abandoning the popup
			// work; unlike actions.abandon() no need to abort requests or
			// have a delay, since we want the title as soon as possible and
			// there should not be any open requests
			if ( action.el &&
				action.el.hasAttribute( 'opensearch-results' ) &&
				action.el.getAttribute( 'opensearch-results' ) === '' &&
				// Match the token condition from ABANDON_END above, but not
				// the isUserDwelling one, which would have been set to false
				// by the ABANDON_START handler above
				action.token === state.activeToken
			) {
				// Match the result from ABANDON_END above, but also set
				// isUserDwelling to false
				return nextState( state, {
					activeLink: undefined,
					previewType: undefined,
					activeToken: undefined,
					measures: undefined,
					fetchResponse: undefined,
					shouldShow: false,
					isUserDwelling: false
				} );
			}
			// No change
			return state;

		case actionTypes.FETCH_COMPLETE:
			if ( action.token === state.activeToken ) {
				return nextState( state, {
					fetchResponse: action.result,
					shouldShow: state.isUserDwelling
				} );
			} // else fall through
		default:
			return state;
	}
}
