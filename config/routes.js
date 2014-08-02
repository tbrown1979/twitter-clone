var express = require('express');
var router = express.Router();

module.exports = function(app) {
  var routes = require('../app/controllers/index.js')

  //home
  router.get('/', routes.home);
  ////
  router.post('/setUsername', routes.setUsername);

  return router;
}
