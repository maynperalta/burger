DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;

USE burgersDB;

CREATE table burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (45) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);