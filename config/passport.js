var mongoose = require('mongoose');
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User       = require('../app/models/user');
var configAuth = require('./auth');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
    });

  passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL,
    profileFields   : ['id', 'displayName', 'photos', 'emails']
  },

  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      User.findOne({ 'id' : profile.id }, function(err, user) {
        if (err)
          return done(err);
        if (user) {
          return done(null, user);
        } else {

          new User({
            username: profile.displayName,
            id:       profile.id,
            token:    token,
            //name:     profile.name.givenName + ' ' + profile.name.familyName,
            photo:    profile.photos[0].value,
            email:    profile.emails[0].value
          }).save(function(err, newUser) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));
};
