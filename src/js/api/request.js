'use strict';

var request = require('superagent');

var API_URL = 'https://api-v2launch.trakt.tv/';
var HEADERS = {
	'Content-type': 'application/json',
	'trakt-api-key': '2b3cd597f318362b41a80c63bef6f5b291b271447605f768752b2225e3b88e72',
	'trakt-api-version': '2'	
};

var buildRequest = function(httpMethod, url, data){
	if(httpMethod === 'get'){
		var api_url = API_URL + url;
		return new Promise(function(resolve, reject){
			request.get(api_url)
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
	}	else if(httpMethod === 'post'){
		return new Promise(function(resolve, reject){
			request.post(url)
			.send({name: data})
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
	} else if(httpMethod === 'getInternal'){
		return new Promise(function(resolve, reject){
			request.get(url)
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
};

module.exports = {
	get: function(url) {
		return buildRequest('get', url);
	},
	post: function(url, data){
		return buildRequest('post', url, data);
	},
	getInternal: function(url){
		return buildRequest('getInternal', url);
	}
};