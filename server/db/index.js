var Sequelize = require('sequelize');

var db = new Sequelize('avocado', 'guacman', 'Boundless1!', {dialect: 'mysql'});

module.exports = db;
