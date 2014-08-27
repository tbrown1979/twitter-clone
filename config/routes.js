var express = require('express');
var Tweet = require('../app/models/tweet.js');

//this all needs to be cleaned up

module.exports = function(app, passport) {
  var routes = require('../app/controllers/index.js')

  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  app.get('/auth/facebook/callback',
             passport.authenticate('facebook', { successRedirect: '/profile',
                                                 failureRedirect: '/login' }));

  app.get('/api/test', isLoggedIn, routes.testController);

  app.get('/api/userData', isLoggedInAjax, function(req, res) {
    res.json({user : req.user});//get User out of session
  });

  app.post('/api/tweet', isLoggedInAjax, function(req, res) {
    console.log(req.body);
    var newTweet = new Tweet();
  })


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
