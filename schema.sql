CREATE DATABASE shipmap;

USE shipmap;
CREATE TABLE `places` (
  id INTEGER AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id),
  location VARCHAR(255) NOT NULL
)