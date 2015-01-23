var Sequelize = require('sequelize');

var sequelize = new Sequelize('avocados', 'root', '', {dialect: 'mysql'});

var Groups = sequelize.define('Groups', {
  name: Sequelize.STRING
});

var Users = sequelize.define('Users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.BIGINT
});

// var Memberships = sequelize.define('Memberships', {});
// Memberships.sync();

sequelize.define('Memberships', {}).sync();

Groups.belongsToMany(Users, {through: 'Memberships'});
Users.belongsToMany(Groups, {through: 'Memberships'});

exports.groupBuilder = function (obj) {
  Groups.sync().then(function () {
    var group = Groups.build(obj);
    group.save();
  });
};

exports.userBuilder = function (obj) {
  Users.sync().then(function () {
    var user = Users.build(obj);
    user.save();
  });
};

exports.addToGroup = function(groupName, username){
  Groups.findOne({where: {name: groupName}}).then(function (group) {
    console.log('found one group')
    Users.findOne({where: {username: username}}).then(function (user) {
      console.log('found one user')
      user.addGroups(group);
    });
  });
};
// exports.groupBuilder({name: 'frisbee2'});
// exports.groupBuilder({name: 'frisbee3'});
// exports.groupBuilder({name: 'frisbee4'});
// exports.groupBuilder({name: 'frisbee5'});

// exports.userBuilder({username: 'mikey'});
// exports.userBuilder({username: 'michael'});
// exports.userBuilder({username: 'michelangelo'});

// exports.addToGroup('frisbee4','michael');
// debugger;
