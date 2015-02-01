var db = require('../db/index.js');
var Sequelize = require('sequelize');

var User = db.define('Users', {
  username: {type: Sequelize.STRING, unique: true},
  email: Sequelize.STRING,
  phone: Sequelize.STRING
});

User.sync();

module.exports = User;
