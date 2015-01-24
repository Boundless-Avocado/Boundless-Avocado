var Group = require('./groupModel.js');

module.exports = {
  findGroup: function (req, res, next, groupName) {
    Groups.findOne({where: {name: groupName}})
    .then(function (group) {
      if (!group) {
        console.log('user is searching for "' + groupName + '", but not in database');
      } else {
        req.groupId = group.id;
        next();
      }
    })
  },

  create: function (req, res) {
    Groups.sync().then(function () {
      var group = Groups.build(req.body);
      group.save();
    });
  },

  browse: function (req, res) {

  },

  join: function (req, res) {
    Users.findOne({where: {username: req.body.username}})
    .then(function (user) {
      user.addGroups(req.groupId);
    });
  },

  ping: function (req, res) {

  }
};
