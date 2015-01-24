var Group = require('./groupModel.js');

module.exports = {
  findGroup: function (req, res, next group) {

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
    addToGroup = function(groupName, username){
      Groups.findOne({where: {name: groupName}}).then(function (group) {
        Users.findOne({where: {username: username}}).then(function (user) {
          user.addGroups(group);
        });
      });
    };
  },

  ping: function (req, res) {

  }
};
