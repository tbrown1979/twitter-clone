var express = require('express');
var router = express.Router();

module.exports = function(app, passport) {
  var routes = require('../app/controllers/index.js')

  //home
  router.get('/', routes.home);

  router.post('/setUsername', routes.setUsername);

  router.get('/auth/facebook', passport.authenticate('facebook'));

  router.get('/auth/facebook/callback',
             passport.authenticate('facebook', { successRedirect: '/',
                                                 failureRedirect: '/login' }));
  return router;
}
