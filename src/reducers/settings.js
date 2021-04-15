import actionTypes from '../actionTypes';
import nextState from './nextState';

/**
 * Reducer for actions that modify the state of the settings
 *
 * @param {Object} state
 * @param {Object} action
 * @return {Object} state after action
 */
export default function settings( state, action ) {
	if ( state === undefined ) {
		state = {
			shouldShow: false,
			showHelp: false,
			shouldShowFooterLink: false
		};
	}

	switch ( action.type ) {
		case actionTypes.SETTINGS_SHOW:
			return nextState( state, {
				shouldShow: true,
				showHelp: false
			} );
		case actionTypes.SETTINGS_HIDE:
			return nextState( state, {
				shouldShow: false,
				showHelp: false
			} );
		case actionTypes.SETTINGS_CHANGE: {
			const nothingChanged = Object.keys( action.newValue ).every( function ( type ) {
					return action.oldValue[ type ] === action.newValue[ type ];
				} ),
				userOptedOut = Object.keys( action.newValue ).some( function ( type ) {
					// Check if at least one setting has been deactivated that was active before
					return action.oldValue[ type ] && !action.newValue[ type ];
				} ),
				anyDisabled = Object.keys( action.newValue ).some( function ( type ) {
					// Warning, when the state is null the user can't re-enable this popup type!
					return action.newValue[ type ] === false;
				} );

			if ( nothingChanged ) {
				// If the setting is the same, just hide the dialogs
				return nextState( state, {
					shouldShow: false
				} );
			}

			return nextState( state, {
				// If we enabled, we just hide directly, no help
				// If we disabled, keep it showing and let the ui show the help.
				shouldShow: userOptedOut,
				showHelp: userOptedOut,

				// Since the footer link is only ever shown to anonymous users (see
				// the BOOT case below), state.userIsAnon is always truthy here.
				shouldShowFooterLink: anyDisabled
			} );
		}
		case actionTypes.BOOT: {
			const anyDisabled = Object.keys( action.initiallyEnabled ).some( function ( type ) {
				// Warning, when the state is null the user can't re-enable this popup type!
				return action.initiallyEnabled[ type ] === false;
			} );
			return nextState( state, {
				shouldShowFooterLink: action.user.isAnon && anyDisabled
			} );
		}
		default:
			return state;
	}
}
