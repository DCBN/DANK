'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('eventemitter3');
var eventEmitter = new EventEmitter();
var actionConstants = require('../constants/actionConstants');

var results = null;
var resultErrors = null;

var SearchStore = {
	getTrending: function() {
		console.log(this.results);
		return JSON.stringify(results);	
	},
	getError: function() {
		return resultErrors;
	},
	emit: function(event) {
		eventEmitter.on(event);
	},
	on: function(event, callback) {
		eventEmitter.on(event, callback);
	},
	removeListener: function(event, callback) {
		eventEmitter.removeListener(event, callback);
	}
};

dispatcher.register(function(action){
	switch (action.actionType) {
		/*case actionConstants.GET_TRENDING:
			SearchStore.emit(actionConstants.GET_TRENDING);
			break;*/
		case actionConstants.TRENDING_RESULT:
			results = action.results;
			resultErrors = null;
			SearchStore.emit(actionConstants.TRENDING_RESULT);
			break;
		case actionConstants.ERROR:
			results = null;
			resultErrors = action.error;
			SearchStore.emit(actionsConstants.ERROR);
			break;
		default:
			//fgt
	}
});

module.exports = SearchStore;