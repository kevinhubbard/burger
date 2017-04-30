CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	ID int NOT NULL AUTO_INCREMENT,
	`burger_name` varchar(255) NOT NULL,
	`devoured` boolean,
	`date` datetime NOT NULL DEFAULT NOW(),
	PRIMARY KEY (ID)

);