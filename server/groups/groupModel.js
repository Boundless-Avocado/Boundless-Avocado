var db = require('../db/index.js');
var Sequelize = require('sequelize');

var Group = db.define('Groups', {
  name: {type: Sequelize.STRING, unique: true}
});

Group.sync();

module.exports = Group;
