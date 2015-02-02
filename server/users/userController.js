var User = require('./userModel.js');

module.exports = {
  parseUserUrl: function (req, res, next, username) {
    module.exports.findByUsername(username, function (user) {
      req.user = user;
      next();
    });
  },

  findByUsername: function (username, callback) {
    User.findOne({where: {username: username}})
    .then(function (user) {
      if (!user) {
        console.log('No user with username ' + username + ' in database');
      } else {
        if (callback) {
          callback(user);
        } else {
          return user;
        }
      }
    });
  },

  findByPhone: function (phone, callback) {
    User.findOne({where: {phone: phone}})
    .then(function (user) {
      if (!user) {
        console.log('No user with number ' + phone + ' in database');
      } else {
        if (callback) {
          callback(user);
        } else {
          return user;
        }
      }
    });
  },

  findByEmail: function (email, callback) {
    User.findOne({where: {email: email}})
    .then(function (user) {
      if (!user) {
        console.log('No user with email ' + email + ' in database');
      } else {
        if (callback) {
          callback(user);
        } else {
          return user;
        }
      }
    });
  },

  browse: function (req, res) {
    User.findAll()
    .then(function (users) {
      res.end(JSON.stringify(users));
    });
  },

  signup: function (req, res, next) {
    // check to see if user already exists
    User.findOne({where: {username: req.body.username}})
      .then(function(user) {
        if (user) {
          next(new Error('User already exists'));
        } else {
          // make a new user if not one
          User.sync().then(function () {
            var user = User.build(req.body);
            user.save();
          });
        }
      })
      .then(function (user) {
        // TODO: create token to send back for auth
        // var token = jwt.encode(user, 'secret');
        // res.json({token: token});
        res.send(req.body);
      })
      .catch(function (error) {
        next(error);
      });
  },

  groups: function (req, res) {
    req.user.getGroups()
    .then(function (groups) {
      res.end(JSON.stringify(groups));
    });
  }
};
