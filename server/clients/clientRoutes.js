var groupController = require('../groups/groupController.js');
var userController = require('../users/userController.js');

module.exports = function (app) {
  app.post('/twilio', function determineRoute (req, res){
    req.user = userController.findByPhone(req.body.From);

    if (req.body.Body.slice(0,5).toUpperCase() === "JOIN ") {
      req.body = {'name': req.body.Body.slice(5), 'phone': req.body.From};
      groupController.join(req, res);
    } else if (req.body.Body.slice(0,7).toUpperCase() === "CREATE ") {
      req.body = {'name': req.body.Body.slice(7), 'phone': req.body.From};
      groupController.create(req, res);
    } else if (req.body.Body === "BROWSE"){
      groupController.browse(req, res);
    // } else if (req.body.body.slice(0,6).toUpperCase() === "SIGN UP"){
    //   TODO: capture user info through sms
    //   userController.signup(req, res);
    } else {
      req.group = groupController.find(req.body.Body);
      req.body = {'name': req.body.Body, 'phone': req.body.From};
      groupController.ping(req, res);
    }
  });

  app.post('/sendgrid', function determineRoute (req, res){
    var user = userController.findByEmail(req.body.From);


  });

};
