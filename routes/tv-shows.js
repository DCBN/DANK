'use strict';

module.exports = function(app) {
	app.route('/tvshows')
	.get(function(req, res, next) {
		res.render('tv-shows', { title: 'TV-Shows' });
	});
}