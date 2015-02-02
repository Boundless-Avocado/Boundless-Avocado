var groupController = require('../groups/groupController.js');
var userController = require('../users/userController.js');

module.exports = function (app) {
  app.post('/twilio', function (req, res){
    userController.findByPhone(req.body.From.slice(2), function (user) {
      req.user = user;

      if (req.body.Body.slice(0,5).toUpperCase() === "JOIN ") {
        groupController.find(req.body.Body.slice(5), function (group) {
          req.group = group;
          req.body.username = user.username;
          groupController.join(req, res);
        });

      } else if (req.body.Body.slice(0,7).toUpperCase() === "CREATE ") {
        req.body = {'name': req.body.Body.slice(7)};
        groupController.create(req, res);

      } else if (req.body.Body === "BROWSE"){
        groupController.browse(req, res);

      // } else if (req.body.body.slice(0,7).toUpperCase() === "SIGNUP ") {
      //   TODO: prompt user info via sms
      //   userController.signup(req, res);

      } else {
        groupController.find(req.body.Body.toLowerCase(), function (group) {
          req.group = group;
          groupController.ping(req, res);
        });
      }
    });
  });

  app.post('/sendgrid', function (req, res) {
    userController.findByEmail(req.body.From, function (user) {
      req.user = user;

      if (req.body.subject.slice(0,5).toUpperCase() === "JOIN ") {
        groupController.find(req.body.text.slice(5), function (group) {
          req.group = group;
          req.body.username = user.username;
          groupController.join(req, res);
        });

      } else if (req.body.subject.slice(0,7).toUpperCase() === "CREATE ") {
        req.body = {'name': req.body.Body.slice(7)};
        groupController.create(req, res);

      } else if (req.body.subeject.slice(0,7).toUpperCase() === "BROWSE"){
        groupController.browse(req, res);

      } else {
        groupController.find(req.body.subject.toLowerCase(), function (group) {
          req.group = group;
          groupController.ping(req, res);
        });
      }
    });
  });
};
