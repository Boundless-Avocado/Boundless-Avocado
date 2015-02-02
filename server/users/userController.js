var User = require('./userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');
var utils = require('../config/utils');


module.exports = {
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

  signin: function (req, res, next) {
    var username = req.body.username,
        password = req.body.password;

    var findUser = Q.nbind(User.findOne, User);
    findUser({username: username})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePasswords(password)
            .then(function(foundUser) {
              if (foundUser) {
                var token = jwt.encode(user, 'secret');
                res.json({token: token});
              } else {
                return next(new Error('No user'));
              }
            });
        }
      })
      .catch(function (error) {
        next(error);
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

  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token, 'secret');
      var findUser = Q.nbind(User.findOne, User);
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .catch(function (error) {
          next(error);
        });
    }
  }
};
