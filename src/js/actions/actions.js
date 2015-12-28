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
		dispatcher.dispatch({
			actionType: actionConstants.SAVE_PLAYLIST,
			index: name
		});
	}	
};

module.exports = actions;