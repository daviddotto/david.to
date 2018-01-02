var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * Links Model
 * =====================
 */

var Link = new keystone.List('Link', {
	track: true,
	autokey: { from: 'name', path: 'key', unique: true },
})

Link.add({
	name: { type: String, required: true },
	url: { type: Types.Url, required: false },
})

/**
 * Registration
 * ============
 */

Link.register()
