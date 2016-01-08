'use strict';
var mongoose = require('mongoose');
var User = require('../models/user').User;
var Playlist = require('../models/user').Playlist;

module.exports = function(app){
	app.route('/movies/playlist/create')
	.post(function(req, res, next){
		if(req.body.name){
			var List = new Playlist();
			List._id = mongoose.Types.ObjectId();
			List._name = req.body.name;
			List.user_id = req.session.passport.user;
			List.save();
			res.end('Playlist Created');
		} else {
			next();
		}
		//console.log(req.body.name);
		//console.log(req.body);
	});	

	app.route('/movies/playlists')
	.get(function(req, res, next){
		Playlist.find({'user_id': req.session.passport.user}, function(err, playlists){
			if(err){
	  			return done(err);
			}
	  		if(playlists){
	  			res.send(playlists);
	  		}
		});
	});
};