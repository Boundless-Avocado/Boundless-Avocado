var db = require('../db/index.js');
var Sequelize = require('sequelize');

var Groups = db.define('Groups', {
  name: {type: Sequelize.STRING, unique: true}
});

Groups.sync();

module.exports = Groups;
