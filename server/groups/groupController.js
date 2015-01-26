var Group = require('./groupModel.js');
require('../db/relationshipModel.js'); // sets up many-to-many relationship

module.exports = {
  findGroup: function (req, res, next, groupName) {
    Groups.findOne({where: {name: groupName}})
    .success(function (group) {
      if (!group) {
        console.log('user is searching for "' + groupName + '", but not in database');
      } else {
        req.groupId = group.id;
        next();
      }
    });
  },

  create: function (req, res) {
    Groups.sync().success(function () {
      var group = Groups.build(req.body);
      group.save()
      .success(function (result) {
        res.end('Success:', result);
      })
    });
  },

  browse: function (req, res) {
    Groups.find()
    .success(function (groups) {
      res.end(groups);
    });
  },

  join: function (req, res) {
    Users.findOne({where: {username: req.body.username}})
    .success(function (user) {
      user.addGroups(req.groupId)
      .success(function (result) {
        res.end('Success:', result);
      })
      .error(function (err) {
        console.log(err);
      });
    });
  },

  ping: function (req, res) {

  }
};
