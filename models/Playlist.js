var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistSchema = new Schema({
	playlist: {
		_id: {
			type: Schema.Types.ObjectId,
			required: true
		},
		user_id: {
			type: Schema.Types.ObjectId,
			required: true
		},
		_name: String,
	},
	playlist_items: {
		_id: {
			type: Schema.Types.ObjectId,
			required: true
		},
		playlist_id: {
			type: Schema.Types.ObjectId,
			required: true
		},
		item_id: {
			type: Schema.Types.ObjectId,
			required: true
		},
	},
	item: {
		_id: {
			type: Schema.Types.ObjectId,
			required: true
		}
	}
});

var Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = {
	Playlist: Playlist
}