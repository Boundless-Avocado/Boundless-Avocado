var db = require('../db/index.js');
var Groups = require('../groups/groupModel.js');
var Users = require('../users/userModel.js');

var Memberships = db.define('Memberships', {});

Users.belongsToMany(Groups, {through: 'Memberships'});
Groups.belongsToMany(Users, {through: 'Memberships'});

Memberships.sync();
