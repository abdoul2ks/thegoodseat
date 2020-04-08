## Dependencies
 **open your terminal and clone the repositorie
 **after install all dependencies with command "npm install"
## Run in local
  **you have to install XamPP or WamPP https://www.apachefriends.org/fr/download.html <br />
  **you have to install Postman https://www.postman.com/downloads/ <br />
  **you need to open the project go to config/databases.js and change the port if necessary <br />
  **you have to run mysql and type : CREATE DATABASE 'thegoodseat'; <br />
  **you have to run mysql and put this next command :<br />
                                                     <br />
                                                          CREATE TABLE `user` (`user_id` int(11) NOT NULL AUTO_INCREMENT,
                                                              `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
                                                               `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
                                                               `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
                                                               `Cpassword` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
                                              PRIMARY KEY (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
                                              <br />
                                              <br />
  **Run xamPP and start MYSQL <br />
  **Open your terminale and type: "nodemon app.js"
## START TEST !!
