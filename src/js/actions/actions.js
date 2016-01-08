'use strict';

var api = require('../api/index');
var dispatcher = require('../dispatcher/dispatcher');
var actionConstants = require('../constants/actionConstants');

var actions = {
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
	addGenre: function(genre){
		dispatcher.dispatch({
			actionType: actionConstants.ADD_GENRE,
			index: genre
		});
	},
	removeGenre: function(genre){
		dispatcher.dispatch({
			actionType: actionConstants.REMOVE_GENRE,
			index: genre
		});
	},
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
	addToPlaylist: function(item){
		dispatcher.dispatch({
			actionType: actionConstants.ADD_TO_PLAYLIST,
			index: item
		});
	}	
};

module.exports = actions;