DROP DATABASE IF EXISTS burger;

CREATE DATABASE burger;

USE burger;

CREATE TABLE Burgers(
id int NOT NULL auto_increment,
burger_name varchar(255),
devoured bool default 0, 
PRIMARY KEY(id)
)