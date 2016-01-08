var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');

var db = require('../models/user');
var User = db.User;

module.exports = function(passport){
	passport.serializeUser(function(user, done) {
  		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  	User.findById(id, function(err, user) {
	  		done(err, user);
	  	});
	});

	passport.use(new FacebookStrategy({
	    clientID: configAuth.facebook.APP_ID,
	    clientSecret: configAuth.facebook.APP_SECRET,
	    callbackURL: configAuth.facebook.CALLBACK,
	    profileFields: ['id', 'emails', 'name', 'photos']
	  },
	  function(accessToken, refreshToken, profile, done) {
	  	process.nextTick(function(){
	  		User.findOne({'user.id': profile.id}, function(err, user){
	  			if(err)
	  				return done(err);
	  			if(user)
	  				return done(err, user);
	  			else {
	  				var newUser = new User();
	  				newUser.user.id = profile.id,
	  				newUser.user._token = accessToken,
	  				newUser.display_name = profile.name.givenName + ' ' + profile.name.familyName;
	  				newUser.email = profile.emails[0].value;
	  				newUser.profile_picture = profile.photos[0].value;
	  				newUser.user._social = 'Facebook';
	  				newUser.save(function(err) {
	  					if(err)
	  						console.log(err);
	  						throw err;
	  					return done(err, newUser);
	  				});
	  			}
	  		});
	  	});
	  }
	));

		passport.use(new GoogleStrategy({
	    clientID: configAuth.google.APP_ID,
	    clientSecret: configAuth.google.APP_SECRET,
	    callbackURL: configAuth.google.CALLBACK,
	    profileFields: ['id', 'emails', 'name', 'photos']
	  },
	  function(accessToken, refreshToken, profile, done) {
	  	process.nextTick(function(){
	  		User.findOne({'user.id': profile.id}, function(err, user){
	  			if(err)
	  				return done(err);
	  			if(user)
	  				return done(err, user);
	  			else {
	  				var newUser = new User();
	  				newUser.user.id = profile.id,
	  				newUser.user._token = accessToken,
	  				newUser.display_name = profile.displayName;
	  				newUser.email = profile.emails[0].value;
	  				newUser.profile_picture = profile.photos[0].value;
	  				newUser.user._social = 'Google';
	  				newUser.save(function(err) {
	  					if(err)
	  						throw err;
	  					return done(err, newUser);
	  				});
	  			}
	  		});
	  	});
	  }
	));
};