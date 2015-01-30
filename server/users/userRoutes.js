var userController = require('./userController.js');
var app = require('../server');
var utils = require('../config/utils');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.post('/', userController.signup);
  // app.post('/signin', userController.signin);
  // app.get('/signedin', userController.checkAuth);
};
