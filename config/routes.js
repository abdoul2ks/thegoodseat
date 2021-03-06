/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
require('dotenv').config();

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //FRONTEND
  '/': { view: 'pages/homepage' },
  '/course/search': { view: 'course' },
  '/course/price' : { view: 'coursebyprice' },
  '/course/waitingTimes' : { view: 'coursewaitingtimes' },
  '/login': {view: 'login'},
  '/register': {view: 'register'},
  //BACKEND
  'POST /course/search' : 'CourseSearchController.Search',
  'POST /course/price' : 'CourseSearchController.getPrice',
  'POST /course/waitingTimes' : 'CourseSearchController.waitingTimes',
  //BACKEND->AUTHENTIFICATION
  'POST /register' : 'UserController.register',
  'POST /login' : 'UserController.Login'

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

};
