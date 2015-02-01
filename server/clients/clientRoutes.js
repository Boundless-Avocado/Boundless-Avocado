var groupController = require('./groupController.js');
var userController = require('./userController.js');

module.exports = function (app) {
  app.post('/twilio', function determineRoute (req, res){
    if (req.body.Body.slice(0,5).toUpperCase() === "JOIN ") {
      req.body = {'name': req.body.Body.slice(5), 'number': req.body.From};
      groupController.join(req, res);
    } else if (req.body.Body.slice(0,7).toUpperCase() === "CREATE ") {
      req.body = {'name': req.body.Body.slice(7), 'number': req.body.From};
      groupController.create(req, res);
    } else if (req.body.Body === "BROWSE"){
      groupController.browse(req, res);
    // } else if (req.body.body.slice(0,6).toUpperCase() === "SIGN UP"){
    //   TODO: capture user info through sms
    //   userController.signup(req, res);
    } else {
      groupController.find(req.body.Body);
      req.body = {'name': req.body.Body, 'number': req.body.From};
      groupController.ping(req, res);
    }
  });
};
