var Group = require('./groupModel.js');
require('../db/relationshipModel.js'); // sets up many-to-many relationship
var utils = require('../config/utils');


module.exports = {
  parseGroupUrl: function (req, res, next, groupName) {
    req.group = find(groupName);
    next();
  },

  find: function (groupName)
    Group.findOne({where: {name: groupName}})
    .then(function (group) {
      if (!group) {
        console.log('user is searching for "' + groupName + '", but not in database');
      } else {
        return group;
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
    Group.build(req.body).save()
    .then(function (result) {
      res.end(JSON.stringify(result));
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

  },

  ping: function (req, res) {
    req.group.getUsers()
    .then(function (users) {
      users.forEach(function (user) {
        utils.twilio("Why don't we get together for some " + req.group.name + " today?", user.phone);
        utils.sendgrid("Why don't we get together for some " + req.group.name + " today?",  user.email);
      })
      res.end('Pinged ' + users.length + 'members of ' + req.group.name);
    });
  }
};
