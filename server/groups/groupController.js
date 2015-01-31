var Group = require('./groupModel.js');
require('../db/relationshipModel.js'); // sets up many-to-many relationship

module.exports = {
  findGroup: function (req, res, next, groupName) {
    Group.findOne({where: {name: groupName}})
    .then(function (group) {
      if (!group) {
        console.log('user is searching for "' + groupName + '", but not in database');
      } else {
        req.group = group;
        next();
      }
    });
  },

  create: function (req, res) {
    Group.sync().then(function () {
      var group = Group.build(req.body);
      group.save()
      .then(function (result) {
        res.end(JSON.stringify(result));
      })
    });
  },

  browse: function (req, res) {
    Group.findAll()
    .then(function (groups) {
      res.end(JSON.stringify(groups));
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

  members: function (req, res) {
    req.group.getUsers()
    .then(function (users) {
      res.end(JSON.stringify(users));
    });
  },

  ping: function (req, res) {
    req.group.getUsers()
    .then(function (users) {
      users.forEach(function (user) {

      })
      res.end('Pinged ' + users.length + 'members of ' + req.group.name);
    });
  }
};
