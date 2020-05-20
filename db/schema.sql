-- Create the database and use it and then create a table
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(110) NOY NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)