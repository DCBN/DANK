'use strict';

var api = require('../api/index');
var dispatcher = require('../dispatcher/dispatcher');
var actionConstants = require('../constants/actionConstants');

var store = {
	items: []
}

var actions = {
	//Get Trending movies
	trending: function(){
		/*dispatcher.dispatch({
                actionType: actionConstants.GET_TRENDING
         });*/
		api.trending()
		.then(function(result){
				dispatcher.dispatch({
					actionType: actionConstants.TRENDING_RESULT,
					results: result
				});
		}, function(error){
			console.log(error);
			dispatcher.dispatch({
				actionType: actionConstants.ERROR,
				error: error
			});
		});
	},
	//Search content by name
	search: function(query){
		/*dispatcher.dispatch({
                actionType: actionConstants.GET_TRENDING
         });*/
		api.search(query)
		.then(function(result){
				dispatcher.dispatch({
					actionType: actionConstants.SEARCH_RESULT,
					results: result
				});
		}, function(error){
			console.log(error);
			dispatcher.dispatch({
				actionType: actionConstants.ERROR,
				error: error
			});
		});
	},
	//Add genre filter
	addGenre: function(genre){
		dispatcher.dispatch({
			actionType: actionConstants.ADD_GENRE,
			index: genre
		});
	},
	//Remove genre filter
	removeGenre: function(genre){
		dispatcher.dispatch({
			actionType: actionConstants.REMOVE_GENRE,
			index: genre
		});
	},
	//Create new playlist
	savePlaylist: function(name){
		api.save_playlist(name)
		.then(function(){
			dispatcher.dispatch({
				actionType: actionConstants.SAVE_PLAYLIST,
				index: name
			});
		}, function(error){
			dispatcher.dispatch({
				actionType: actionConstants.ERROR,
				error: error
			});
		});
	},
	//Get all user playlists
	getPlaylists: function(){
		api.get_playlists()
		.then(function(playlists){
			dispatcher.dispatch({
				actionType: actionConstants.GET_PLAYLISTS,
				index: playlists
			});
		}, function(error){
			dispatcher.dispatch({
				actionType: actionConstants.ERROR,
				error: error
			});
		});
	},
	//Get playlist with including items
	getPlaylist: function(id){
		var movies;
		api.get_playlist(id)
		.then(function(items){
			items.map(function(movie){
				store.items = [];
				api.getMovieById(movie._id)
				.then(function(movie){
					store.items.push(movie);
				})
				.then(function(){
					dispatcher.dispatch({
					actionType: actionConstants.GET_PLAYLIST,
					items: store
				}, function(error){
					dispatcher.dispatch({
					actionType: actionConstants.ERROR,
					error: error
						});
					});
				});
			});
		})
	},
	//Add item to playlist
	addToPlaylist: function(playlist, movie){
		api.addToPlaylist(playlist, movie)
		.then(function(){
			dispatcher.dispatch({
				actionType: actionConstants.ADD_TO_PLAYLIST,
				playlist: playlist,
				movie: movie
			}, function(error){
				dispatcher.dispatch({
				actionType: actionConstants.ERROR,
				error: error
				});
			});
		})
	}	
};

module.exports = actions;