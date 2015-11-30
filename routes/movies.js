'use strict';
var User = require('../models/user');

module.exports = function(app) {
	app.route('/movies')
	.get(isLoggedIn, function(req, res, next) {
		res.render('movies', { title: 'Movies', user: req.user });
	});

	function isLoggedIn(req, res, next) {
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/');
	}
}