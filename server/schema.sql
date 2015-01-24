CREATE DATABASE avocado;

USE avocado;

CREATE TABLE groups (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE memberships (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  email varchar(255),
  phone integer(10)
);
