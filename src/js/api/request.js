'use strict';

var request = require('superagent');

var API_URL = 'https://api-v2launch.trakt.tv/';
var HEADERS = {
	'Content-type': 'application/json',
	'trakt-api-key': '2b3cd597f318362b41a80c63bef6f5b291b271447605f768752b2225e3b88e72',
	'trakt-api-version': '2'	
};

var buildRequest = function(apiMethod){
	var url = API_URL + apiMethod;

	return new Promise(function(resolve, reject){
		request.get(url)
		.set(HEADERS)
		.on('error', function(error) {
			reject(error);
		})
		.end(function(error, result){
			if(error) {
				reject(error);
			} else {
				resolve(result.body);
			}
		});
	});	
};

module.exports = {
	get: function(apiMethod) {
		return buildRequest(apiMethod);
	}
};