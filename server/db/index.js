var express = require('express');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('avocado', 'root', 'boundless');

var Groups = sequelize.define('Groups', {
  groupName: Sequelize.STRING
});

var Memberships = sequelize.define('Memberships', {});

var Users = sequelize.define('Users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.INTEGER
});

Groups.hasMany(Users, {through: 'Memberships'});
Users.hasMany(Groups, {through: 'Memberships'});

exports.groupBuilder = function(obj){
  Groups.sync().success(function(obj){
  var group = Groups.build(obj);
  group.save();
});

exports.membershipBuilder = function(obj){
  Memberships.sync();
};

exports.userBuilder = function(obj){
  Users.sync().success(function(obj){
    var user = Users.build(obj);
    user.save();
  });
};
