
-- Use the correct database --
USE eat_da_burger_db;

-- Populate the database --

-- -- Department seed -- -- 
INSERT INTO burgers (burger_name, devoured)
VALUES ("In-N-Out 'Hamburger'", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("In-N-Out 'Cheeseburger'", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("In-N-Out 'Double-Double'", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("In-N-Out 'Flying Dutchman'", true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("In-N-Out 'Protein Style Hamburger'", true);