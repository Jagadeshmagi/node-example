# NODE-Example

```
####### Dependency Packages  ###########
mysql : npm install mysql --save
hapi : npm install hapi --save
bcrypt : npm install bcrypt --save


######## Run node server ######
node node1.js

Open your browser localhost:3000


#####  How to install mysql in Ubuntu14 #######

sudo apt-get update
sudo apt-get upgrade
sudo apt-get install mysql-server
mysql -u root -p


###### Mysql Query ##############
Create Database emp_details
CREATE TABLE `users` (
    -> `uid` int(11) AUTO_INCREMENT,
    -> `username` varchar(50),
    -> `password` varchar(200),
    -> `email` varchar(200),
    -> PRIMARY KEY (`uid`)
    -> );


###### MYSQL commands ######

$ mysql -u root -p

Get all the DB's - mysql> show databases;
Use the particular DB - mysql> use emp_details;
Get the Tables - mysql> show tables;
Getting Data from table - mysql> show tables;
Getting Fields - mysql> desc users;


###### STEPS ######

1: npm init
2:
	i. import hapi 
	ii. Create a server 
	iii. Start the server  
	iv. And set the route for server with method, path, handler 
