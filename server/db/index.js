var Sequelize = require('sequelize');

var db = new Sequelize('avocados', 'avocados', 'Boundless1!', {dialect: 'mysql'});

module.exports = db;
