# thegoodseat

a [Sails v1](https://sailsjs.com) application

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
## START TEST
   ## AUTHENTIFICATION /register
    *	Run postman and choose on METHOD: "POST"
                                URL REQUEST : "http://localhost:1337/register"
                                body: "Raw"
                                type: "JSON"
    *	inside text part you have to enter for example :
                                              {
                                              "username": "test",
                                              "email": "test@gmail.Com",
                                              "password": "tetsss52",
                                              "Cpassword": "tetsss52"
                                              }
   ## AUTHENTIFICATION /login
    **Run postman and choose on METHOD: "POST"
                                URL REQUEST : "http://localhost:1337/login"
                                body: "Raw"
                                type: "JSON"
    ** inside text part you have to enter for example :
                                              {
                                              "username": "test",
                                              "password": "tetsss52",
                                              }
   ## RECHERCHE DE COURSE /course/search
    **Run postman and choose on METHOD: "POST"
                                URL REQUEST : "http://localhost:1337/course/search"
                                body: "Raw"
                                type: "JSON"
    ** inside text part you have to enter for example :
                                              {
                                                "startLatitude": 49.443750,
                                                "startLongitude": 1.097090,
                                                "endLatitude": 46.672260,
                                                "endLongitude": -1.430190,
                                                "startFullAddress": "17 rue des arsins 76000 rouen",
                                                "startZipCode": "75012",
                                                "endFullAddress": "18 rue pasteur 85000 la roche sur yon",
                                               }
   ## RECHERCHE DE COURSE /course/price
          **Run postman and choose on METHOD: "POST"
                                      URL REQUEST : "http://localhost:1337/course/price"
                                      body: "Raw"
                                      type: "JSON"
          ** inside text part you have to enter for example :
                                                    {
                                                      "startLatitude": 49.443750,
                                                      "startLongitude": 1.097090,
                                                      "endLatitude": 46.672260,
                                                      "endLongitude": -1.430190,
                                                      "startFullAddress": "17 rue des arsins 76000 rouen",
                                                      "startZipCode": "75012",
                                                      "endFullAddress": "18 rue pasteur 85000 la roche sur yon",
                                                     }
   ## RECHERCHE DE COURSE /course/waitingTimes
          **Run postman and choose on METHOD: "POST"
                                      URL REQUEST : "http://localhost:1337/course/waitingTimes"
                                      body: "Raw"
                                      type: "JSON"
          ** inside text part you have to enter for example :
                                                    {
                                                      "startLatitude": 49.443750,
                                                      "startLongitude": 1.097090,
                                                      "endLatitude": 46.672260,
                                                      "endLongitude": -1.430190,
                                                      "startFullAddress": "17 rue des arsins 76000 rouen",
                                                      "startZipCode": "75012",
                                                      "endFullAddress": "18 rue pasteur 85000 la roche sur yon",
                                                     }
