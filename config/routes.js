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
  app.get('/auth/check', simpleAuthCheck, routes.authCheck)
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/login');
  });
  //---------------------
  //Api
  //---------------------
  app.get('/api/test'          , isLoggedIn,     routes.testController);
  app.get('/api/userData'      , isLoggedInAjax, routes.retrieveUserData);
  app.get('/api/userData/:id'  , isLoggedInAjax, routes.retrieveSpecificUserData);
  app.post('/api/tweet'        , isLoggedInAjax, routes.storeTweet);
  app.get('/api/tweets/all/:id', isLoggedInAjax, routes.getUsersTweets);

  //Catch-all
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });
};
//Can maybe make an error page that we can redirect to if there were errors
//Such as if you use the wrong url when trying to find a user
function simpleAuthCheck(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.json( { status: 'failure' } );
  } else {
    next();
  }
}

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
