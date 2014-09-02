var express = require('express');
var Tweet = require('../app/models/tweet.js');

//this all needs to be cleaned up

module.exports = function(app, passport) {
  var routes = require('../app/controllers/index.js')

  //---------------------
  //Authentication
  //---------------------
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
             passport.authenticate('facebook', { successRedirect: '/',
                                                 failureRedirect: '/login' }));
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/login');
  });
  //---------------------
  //Api
  //---------------------
  app.get('/api/test'    , isLoggedIn,     routes.testController);
  app.get('/api/userData', isLoggedInAjax, routes.retrieveUserData);
  app.post('/api/tweet'  , isLoggedInAjax, routes.storeTweet);
  app.get('/api/tweets/all', isLoggedInAjax, routes.getUsersTweets);

  //Catch-all
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });
};

function isLoggedInAjax(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.json( { redirect: '/login' } );
  } else {
    next();
  }
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/login');
}
