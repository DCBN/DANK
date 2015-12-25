'use strict';

var request = require('./request');

var api = {
	trending: function(){
		return request.get('/movies/trending');
	}	
};

module.exports = api;