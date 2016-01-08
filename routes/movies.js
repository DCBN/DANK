'use strict';
var User = require('../models/user').User;

module.exports = function(app) {
	app.route('/movies')
	.get(function(req, res, next) {
				res.render('movies', { 
					title: 'Movies',
					name: req.user.display_name,
					picture: req.user.profile_picture
		});
	});
}