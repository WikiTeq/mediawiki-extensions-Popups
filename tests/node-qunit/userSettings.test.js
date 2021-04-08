import { createStubMap } from './stubs';
import createUserSettings from '../../src/userSettings';

QUnit.module( 'ext.popups/userSettings', {
	beforeEach() {
		this.storage = createStubMap();
		this.userSettings = createUserSettings( this.storage );
	}
} );

QUnit.test( '#isPagePreviewsEnabled should return false if Page Previews have been disabled', function ( assert ) {
	this.userSettings.storePagePreviewsEnabled( false );

	assert.notOk(
		this.userSettings.isPagePreviewsEnabled(),
		'The user has disabled Page Previews.'
	);

	// ---

	this.userSettings.storePagePreviewsEnabled( true );

	assert.ok(
		this.userSettings.isPagePreviewsEnabled(),
		'#isPagePreviewsEnabled should return true if Page Previews have been enabled'
	);
} );

QUnit.test( '#getPreviewCount should return the count as a number', function ( assert ) {
	assert.strictEqual(
		this.userSettings.getPreviewCount(),
		0,
		'#getPreviewCount returns 0 when the storage is empty.'
	);

	// ---

	this.storage.set( 'ext.popups.core.previewCount', false );

	assert.strictEqual(
		this.userSettings.getPreviewCount(),
		-1,
		'#getPreviewCount returns -1 when the storage isn\'t available.'
	);

	// ---

	this.storage.set( 'ext.popups.core.previewCount', '111' );

	assert.strictEqual(
		this.userSettings.getPreviewCount(),
		111,
		'#getPreviewCount returns the total.'
	);
} );

QUnit.test( '#storePreviewCount should store the count as a string', function ( assert ) {
	this.userSettings.storePreviewCount( 222 );

	assert.strictEqual(
		this.storage.get( 'ext.popups.core.previewCount' ),
		'222',
		'Storage returns the total as a string.'
	);
} );

QUnit.test( '#getPreviewCount should override value in storage when is not a number', function ( assert ) {
	this.storage.set( 'ext.popups.core.previewCount', 'NaN' );

	assert.strictEqual(
		this.userSettings.getPreviewCount(),
		0,
		'#getPreviewCount returns a sane default.'
	);
	assert.strictEqual(
		this.storage.get( 'ext.popups.core.previewCount' ),
		'0',
		'Storage returns a sane default as a string.'
	);
} );
