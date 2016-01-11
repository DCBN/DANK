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
	},
	get_playlist: function(id){
		return request.getPlaylist('/movies/playlist/' + id);
	},
	addToPlaylist: function(playlist, movie){
		return request.postToPlaylist('/movies/playlist/add', playlist, movie);
	},
	getMovieById: function(id){
		return request.get('/search?id_type=trakt-movie&id=' + id + '&extended=full,images');
	}
};

module.exports = api;