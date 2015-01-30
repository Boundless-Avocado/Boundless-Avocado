var groupController = require('./groupController.js');
var app = require('../server');
var utils = require('../config/utils');


module.exports = function (app) {
  // app is injected from middlware.js

  app.param('group', groupController.findGroup)

  app.post('/', groupController.create);
  app.get('/', groupController.browse);

  app.post('/:group', groupController.join)
  app.post('/:group/pings/', groupController.ping)
};
