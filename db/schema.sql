
-- Setup the database --
DROP DATABASE IF EXISTS eat_da_burger_db;
CREATE DATABASE eat_da_burger_db;
USE eat_da_burger_db;

-- Create table(s) --

-- -- Department table -- -- 
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);