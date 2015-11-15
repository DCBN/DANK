'use strict';

module.exports = function(app) {
	app.route('/movies')
	.get(function(req, res, next) {
		res.render('movies', { title: 'Movies' });
	});
}