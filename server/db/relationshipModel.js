var db = require('../db/index.js');
var Group = require('../groups/groupModel.js');
var User = require('../users/userModel.js');

var Memberships = db.define('Memberships', {});

User.belongsToMany(Group, {through: 'Memberships'});
Group.belongsToMany(User, {through: 'Memberships'});

Memberships.sync();
