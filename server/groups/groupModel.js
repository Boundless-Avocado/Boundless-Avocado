var sequelize = require('./db/index.js');
var Users = require('./users/userModel.js');

var Groups = sequelize.define('Groups', {
  name: Sequelize.STRING
});

Groups.belongsToMany(Users, {through: 'Memberships'});

exports.Groups = Groups;
