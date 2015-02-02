var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.param('user', userController.parseUserUrl);

  app.get('/', userController.browse);
  app.post('/', userController.signup);

  app.get('/:user/groups', userController.groups);
  // app.post('/signin', userController.signin);
  // app.get('/signedin', userController.checkAuth);
};
