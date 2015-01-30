var express = require('express');
var utils = require('./server/config/utils')

var app = express();

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Server now listening on port ' + port);

// configure our server with all the middleware and and routing
require('./server/config/middleware.js')(app, express);

// export our app for testing and flexibility, required by index.js
module.exports = app;



/* Walkthrough of the server

  Express and our server are initialized here.
  Next, we then inject our server and express into our config/middlware.js file for setup.
  We also exported our server for easy testing, it is then started in index.js

  middleware.js requires all express middlware and sets it up
  Our authentication is set up there as well
  We also create individual routers for our two main features, links and users
  each feature has it's own folder with a model, controller, and route file
    the respective file is required in middlware.js and injected with its mini router
    that route file then requires the respective controller and sets up all the routes
    that controller then requires the respective model and sets up all our endpoints which respond to request

*/
