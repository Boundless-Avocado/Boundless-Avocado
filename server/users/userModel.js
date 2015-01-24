var sequelize = require('./db/index.js');
var Groups = require('./groups/groupModel.js');

var Users = sequelize.define('Users', {
  username: {type: Sequelize.STRING, unique: true},
  email: Sequelize.STRING,
  phone: Sequelize.BIGINT
});

Users.belongsToMany(Groups, {through: 'Memberships'});

exports.Users = Users;
