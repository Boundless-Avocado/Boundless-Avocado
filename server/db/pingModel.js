var db = require('../db/index.js');
var Group = require('../groups/groupModel.js');
var User = require('../users/userModel.js');

var Ping = db.define('Pings', {});

Group.hasMany(Ping);
User.hasMany(Ping);

Ping.sync();
