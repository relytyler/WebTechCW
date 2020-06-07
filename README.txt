In order for the login page to work, you will need to create a database as we did not get around to creatnig a register function.

The website login page uses MySQL.
The following commands will give you the database required.

CREATE DATABASE userdata;
USE userdata;
CREATE TABLE tablename ( id smallint unsigned not null auto_increment, username varchar(20) not null, password varchar(60), constraint pk_example primary key (id) );
INSERT INTO tablename ( id, username, password ) VALUES ( null, 'user', 'pass' );

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';