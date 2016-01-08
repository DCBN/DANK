var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	user: {
		id: {
			type: String,
			required: true,
			unique: true
		},
		_token: {
			type: String,
			required: true,
		},
		_social: {
			type: String,
			required: true,
		},
	},
	display_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		lowercase: true,
		unique: true
	},
	profile_picture: {
		type: String,
		default: ''
	},
});

var playlistSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		required: true
	},
	_name: {
		type: String,
		required: true
	},
	user_id: {
		type: String,
		required: true
	},
});

var itemSchema = new Schema({
	_id: {
		type: String,
		required: true
	},
	playlist_id: {
		type: Schema.Types.ObjectId,
		required: true
	}
});

var User = mongoose.model('User', userSchema);
var Playlist = mongoose.model('Playlist', playlistSchema);
var Item = mongoose.model('Item', itemSchema);

module.exports = {
	User: User,
	Playlist: Playlist,
	Item: Item
}