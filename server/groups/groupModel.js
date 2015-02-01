var db = require('../db/index.js');
var Sequelize = require('sequelize');

var Group = db.define('Groups', {
  name: {type: Sequelize.STRING, unique: true, allowNull: false}
});

Group.sync();

module.exports = Group;
