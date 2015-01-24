var Sequelize = require('sequelize');

var sequelize = new Sequelize('avocados', 'root', '', {dialect: 'mysql'});

sequelize.define('Memberships', {}).sync();

// exports.groupBuilder({name: 'frisbee2'});
// exports.groupBuilder({name: 'frisbee3'});
// exports.groupBuilder({name: 'frisbee4'});
// exports.groupBuilder({name: 'frisbee5'});

// exports.userBuilder({username: 'mikey'});
// exports.userBuilder({username: 'michael'});
// exports.userBuilder({username: 'michelangelo'});

// exports.addToGroup('frisbee4','michael');

exports = sequelize;
