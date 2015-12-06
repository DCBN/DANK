'use strict';
var User = require('../models/user');

module.exports = function(app) {
	app.route('/movies')
	.get(function(req, res, next) {
		console.log(req.params);
		res.render('movies', { title: 'Movies', user: req.user });
	});
}