DROP DATABASE IF EXISTS volunteers;

CREATE DATABASE volunteers;

USE volunteers;

CREATE TABLE member (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(256) NOT NULL,
  fullName varchar(256) NOT NULL,
  phone varchar(50) NOT NULL,
  memberRole varchar(256) NOT NULL,
  PRIMARY KEY (email)
);

CREATE TABLE shifts (
  id int NOT NULL AUTO_INCREMENT,
  schedule longtext NOT NULL,
  unavilable text NOT NULL,
  member_email integer NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (member_email) REFERENCES member(email)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
