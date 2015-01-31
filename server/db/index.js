var Sequelize = require('sequelize');

var db = new Sequelize('avocados', 'guacman', 'Boundless1!', {dialect: 'mysql'});

module.exports = db;
