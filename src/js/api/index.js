'use strict';

var request = require('./request');

var api = {
	trending: function(){
		return request.get('/movies/trending?extended=full,images&limit=28');
	},
	search: function(query){
		return request.get('search?query=' + query + '&type=movie&extended=full,images&limit=24');
	},
	save_playlist: function(name){
		return request.post('/movies/playlist/create', name);
	},
	get_playlists: function(){
		return request.getInternal('/movies/playlists');
	}	
};

module.exports = api;