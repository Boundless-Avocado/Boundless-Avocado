var Sequelize = require('sequelize');

var db = new Sequelize('avocado', 'root', '', {dialect: 'mysql'});

// // TESTS:

// exports.groupBuilder({name: 'frisbee2'});
// exports.groupBuilder({name: 'frisbee3'});
// exports.groupBuilder({name: 'frisbee4'});
// exports.groupBuilder({name: 'frisbee5'});

// exports.userBuilder({username: 'mikey'});
// exports.userBuilder({username: 'michael'});
// exports.userBuilder({username: 'michelangelo'});

// exports.addToGroup('frisbee4','michael');

module.exports = db;
