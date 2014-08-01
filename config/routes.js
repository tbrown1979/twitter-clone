var express = require('express');
var router = express.Router();

module.exports = function(app) {
  //home
  router.get('/', home);
  
  ////
  var routes = require('../app/controllers/index.js')
  router.post('/setUsername', setUsername);
}
