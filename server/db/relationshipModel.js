var db = require('../db/index.js');
var Group = require('../groups/groupModel.js');
var User = require('../users/userModel.js');
var Sequelize = require('sequelize');

var Membership = db.define('Memberships', {
  active: {type: Sequelize.BOOLEAN, defaultValue: true}
});

User.belongsToMany(Group, {through: Membership});
Group.belongsToMany(User, {through: Membership});

Membership.sync();
