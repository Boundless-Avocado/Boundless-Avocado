var db = require('../db/index.js');
var Sequelize = require('sequelize');

var User = db.define('Users', {
  username: {type: Sequelize.STRING, unique: true, allowNull: false},
  email: Sequelize.STRING,
  phone: Sequelize.BIGINT
});

User.sync();

module.exports = User;
