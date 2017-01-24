// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// API
var customRoute = require('./routes/custom-route');

// Routes
var routes = require('./routes/index');

//set CORS
var cors = require('cors');
app.use(cors());

// view engine setup
var bodyParser = require('body-parser');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.use('/', routes);

app.use('/api/custom-route', customRoute);

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("Node Backend starting on " + appEnv.url);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ===== Error Handlers ==== //

// Development/test error handler
// will print stacktrace
if (app.get('env') === 'test') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
