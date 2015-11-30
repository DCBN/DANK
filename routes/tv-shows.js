'use strict';

module.exports = function(app) {
	app.route('/tvshows')
	.get(isLoggedIn, function(req, res, next) {
		res.render('tv-shows', { title: 'TV-Shows' });
	});

	function isLoggedIn(req, res, next) {
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/');
	}
}