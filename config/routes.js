var express = require('express');
var router = express.Router();

module.exports = function(app, passport) {
  var routes = require('../app/controllers/index.js')

  //home
  router.get('/', routes.home);

  router.post('/setUsername', routes.setUsername);

  router.get('/auth/facebook', passport.authenticate('facebook'));

  router.get('/auth/facebook/callback',
             passport.authenticate('facebook', { successRedirect: '/test',
                                                 failureRedirect: '/login' }));

  router.get('/test', isLoggedIn, routes.testController);
  return router;
}



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
