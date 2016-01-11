'use strict';
var mongoose = require('mongoose');
var User = require('../models/user').User;
var Playlist = require('../models/user').Playlist;
var Item = require('../models/user').Item;

module.exports = function(app){
	//Create Playlist
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
	//Get all playlists by user
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
	//Add item to playlist
	app.route('/movies/playlist/add')
	.post(function(req, res, next){
		if(req.body.playlist && req.body.movie){
			var Movie = new Item();
			Movie._id = req.body.movie;
			Movie.playlist_id = req.body.playlist;
			Movie.save();
			res.end('Item added!');
			console.log(Movie);
		} else {
			next();
		}
	});
	//Get all items in playlist
	app.route('/movies/playlist/:id')
	.get(function(req, res, next){
		var id = req.params.id;
		Item.find({'playlist_id': id}, function(err, items){
			if(req.params.id){
				res.send(items);
			} else {
				next();
			}
		});
	});
};