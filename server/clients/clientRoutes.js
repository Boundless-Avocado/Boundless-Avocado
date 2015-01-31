var groupController = require('./groupController.js');
var userController = require('./userController.js');

module.exports = function (app) {
  app.post('/twilio', function determineRoute (req, res){
    if (req.body.body.slice(0,4).toUpperCase() === "JOIN") {
      groupController.join(req, res);
    } else if (req.body.body.slice(0,6).toUpperCase() === "CREATE"){
      groupController.create(req, res);
    } else if (req.body.body.slice(0,6).toUpperCase() === "BROWSE"){
      groupController.browse(req, res);
    // } else if (req.body.body.slice(0,6).toUpperCase() === "SIGN UP"){
    //   TODO: capture user info through sms
    //   userController.signup(req, res);
    } else {
      groupController.ping(req, res);
    }
  });
};
