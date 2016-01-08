'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ObjectAssign = require('object-assign');
var actionConstants = require('../constants/actionConstants');

var _store = {
	list: [],
	error: [],
	genres: [],
	playlists: []
}
var resultErrors = null;
var CHANGE_EVENT = 'change';

var SearchStore = ObjectAssign( {}, EventEmitter.prototype, {
	getTrending: function() {
		return _store;
	},
	getError: function() {
		return _store;
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getGenres: function() {
		return _store;
	},
	getPlaylists: function() {
		return _store;
	}
});

dispatcher.register(function(action){
	switch (action.actionType) {
		/*case actionConstants.GET_TRENDING:
			SearchStore.emit(actionConstants.GET_TRENDING);
			break;*/
		case actionConstants.TRENDING_RESULT:
			action.results.map(function(item){
				_store.list.push(item);
			});
			resultErrors = null;
			SearchStore.emit(CHANGE_EVENT);
			break;
		case actionConstants.SEARCH_RESULT:
			_store.list = [];
			action.results.map(function(item){
				_store.list.push(item);
			});
			resultErrors = null;
			SearchStore.emit(CHANGE_EVENT);
			break;
		case actionConstants.ERROR:
			results = null;
			_store.error.push(action.error);
			SearchStore.emit(CHANGE_EVENT);
			break;
		case actionConstants.ADD_GENRE:
			_store.genres.push(action.index);
			SearchStore.emit(CHANGE_EVENT);
			break;
		case actionConstants.REMOVE_GENRE:
			_store.genres = _store.genres.filter(function(index){
				return index !== action.index;
			});
			SearchStore.emit(CHANGE_EVENT);
			break;
		case actionConstants.SAVE_PLAYLIST:
			_store.playlists = [];
			var playlists = {
				"name": action.index,
				"items": [
					{"name": "Batman"},
					{"name": "Spiderman"},
					{"name": "Superman"}
				]
			}
			;
			_store.playlists.push(playlists);
			SearchStore.emit(CHANGE_EVENT);
			break;
		case actionConstants.ADD_TO_PLAYLIST:
			console.log(action.index);
		case actionConstants.GET_PLAYLISTS:
			_store.playlists = [];
			action.index.map(function(playlist){
				var playlists = {
					"name": playlist._name,
					"id": playlist._id,
					"items": [
					{"name": "Batman"},
					{"name": "Spiderman"},
					{"name": "Superman"}
					]
				};
				_store.playlists.push(playlists);
			});
			SearchStore.emit(CHANGE_EVENT);
			break;
		default:
			//fgt
	}
});

module.exports = SearchStore;