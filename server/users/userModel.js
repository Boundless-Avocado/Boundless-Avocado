var db = require('../db/index.js');
var Sequelize = require('sequelize');

var Users = db.define('Users', {
  username: {type: Sequelize.STRING, unique: true},
  email: Sequelize.STRING,
  phone: Sequelize.BIGINT
});

Users.sync();

module.exports = Users;
