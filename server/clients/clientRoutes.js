var groupController = require('./groupController.js');
var userController = require('./userController.js');

module.exports = function (app) {
  app.post('/twilio', function determineRoute (req, res){
    if (req.body.body.slice(0,5).toUpperCase() === "JOIN ") {
      req.body = {'name': req.body.body.slice(5)};
      groupController.join(req, res);
    } else if (req.body.body.slice(0,7).toUpperCase() === "CREATE ") {
      req.body = {'name': req.body.body.slice(7)};
      groupController.create(req, res);
    } else if (req.body.body === "BROWSE"){
      groupController.browse(req, res);
    // } else if (req.body.body.slice(0,6).toUpperCase() === "SIGN UP"){
    //   TODO: capture user info through sms
    //   userController.signup(req, res);
    } else {
      groupController.ping(req, res);
    }
  });
};
