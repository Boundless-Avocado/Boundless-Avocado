var Group = require('./groupModel.js');
require('../db/relationshipModel.js'); // sets up many-to-many relationship
require('../db/pingModel.js'); // sets up Pings table
var clients = require('../clients/clientController.js');

module.exports = {
  parseGroupUrl: function (req, res, next, groupName) {
    module.exports.find(groupName, function (group) {
      req.group = group;
      next();
    });
  },

  find: function (groupName, callback) {
    Group.findOne({where: {name: groupName}})
    .then(function (group) {
      if (!group) {
        console.log('user is searching for "' + groupName + '", but not in database');
      } else {
        if (callback) {
          callback(group);
        } else {
          return group;
        }
      }
    });
  },

  browse: function (req, res) {
    Group.findAll()
    .then(function (groups) {
      res.end(JSON.stringify(groups));
    });
  },

  create: function (req, res) {
    var newGroup = Group.build(req.body);
    newGroup.save()
    .then(function (result) {
      if (req.body.username) {
        require('../users/userController.js').findByUsername(req.body.username, function(user) {
          user.addGroup(newGroup).then(function (result) {
            res.end(JSON.stringify(result));
          });
        });
      } else {
        res.end(JSON.stringify(result));
      }
    });
  },

  members: function (req, res) {
    req.group.getUsers()
    .then(function (users) {
      res.end(JSON.stringify(users));
    });
  },

  join: function (req, res) {
    // TODO: security concern that username is coming from POST request. Easy to forge
    require('../users/userModel.js').findOne({where: {username: req.body.username}})
    .then(function (user) {
      user.addGroup(req.group.id)
      .then(function (result) {
        res.end(JSON.stringify(result));
      })
      .catch(function (err) {
        console.log(err);
      });
    });
  },

  history: function (req, res) {
    req.group.getPings()
    .then(function (pings) {
      res.end(JSON.stringify(pings));
    });
  },

  ping: function (req, res) {
    if (req.user) {
      req.body.username = req.user.username;  // lame hack to not fail on username lookup if already done (i.e. Twilio)
    }

    require('../users/userController.js').findByUsername(req.body.username, function(user) {
      req.user = user;
      req.group.createPing({UserId: req.user.id});
      req.group.getUsers()
      .then(function (users) {
        users.forEach(function (user) {
          clients.sendSMS(req.user.username + " says, 'Lets get together for some " + req.group.name + " today!' Text back " + req.user.phone, user.phone);
          clients.sendEmail("Why don't we get together for some " + req.group.name + " today?", req.user.username + " invited you!", user.email, req.user.email);
        })
        res.end('Pinged ' + users.length + ' members of ' + req.group.name);
      });
    });
  }
};
