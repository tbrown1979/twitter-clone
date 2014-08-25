var express = require('express');

module.exports = function(app, passport) {
  var routes = require('../app/controllers/index.js')

  //home
  //router.get('/', routes.home);//use loggedIn middleware

  //router.post('/setUsername', routes.setUsername);

  app.get('/api/auth/facebook', passport.authenticate('facebook'));

  app.get('/api/auth/facebook/callback',
             passport.authenticate('facebook', { successRedirect: '/test',
                                                 failureRedirect: '/login' }));

  app.get('/api/test', isLoggedIn, routes.testController);

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/login');
}
