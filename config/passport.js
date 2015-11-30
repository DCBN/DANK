var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');
var configAuth = require('./auth');

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
	  	console.log(profile.photos[0].value);
	  	process.nextTick(function(){
	  		User.findOne({'facebook.id': profile.id}, function(err, user){
	  			if(err)
	  				return done(err);
	  			if(user)
	  				return done(err, user);
	  			else {
	  				var newUser = new User();
	  				newUser.socialAccounts.id = profile.id,
	  				newUser.socialAccounts.token = accessToken,
	  				newUser.socialAccounts.name = profile.name.givenName + ' ' + profile.name.familyName;
	  				newUser.socialAccounts.email = profile.emails[0].value;
	  				newUser.socialAccounts.picture = profile.photos[0].value;
	  				newUser.socialAccounts.socialNetwork = 'Facebook';
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

		passport.use(new GoogleStrategy({
	    clientID: configAuth.google.APP_ID,
	    clientSecret: configAuth.google.APP_SECRET,
	    callbackURL: configAuth.google.CALLBACK,
	    profileFields: ['id', 'emails', 'name', 'photos']
	  },
	  function(accessToken, refreshToken, profile, done) {
	  	console.log(profile.photos[0].value);
	  	process.nextTick(function(){
	  		User.findOne({'google.id': profile.id}, function(err, user){
	  			if(err)
	  				return done(err);
	  			if(user)
	  				return done(err, user);
	  			else {
	  				var newUser = new User();
	  				newUser.socialAccounts.id = profile.id,
	  				newUser.socialAccounts.token = accessToken,
	  				newUser.socialAccounts.name = profile.displayName;
	  				newUser.socialAccounts.email = profile.emails[0].value;
	  				newUser.socialAccounts.picture = profile.photos[0].value;
	  				newUser.socialAccounts.socialNetwork = 'Google';
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