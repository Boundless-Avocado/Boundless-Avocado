var Sequelize = require('sequelize');

var db = new Sequelize('avocado', 'guacman', '', {
  dialect: 'sqlite',
  storage: './server/db/db.sqlite'
});

module.exports = db;
