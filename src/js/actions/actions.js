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
			dispatcher.dispatch({
				actionType: actionConstants.ERROR,
				error: error
			});
		});
	}	
};

module.exports = actions;