var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String,
		picture: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String,
		picture: String
	},
	socialAccounts: {
		id: String,
		token: String,
		email: String,
		name: String,
		picture: String,
		socialNetwork: String,
		playlists: []
	}
});

module.exports = mongoose.model('User', userSchema);