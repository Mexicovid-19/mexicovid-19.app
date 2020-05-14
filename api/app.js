var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

//Models
require('./models/municipios');

//Routes
var mapRouter = require('./routes/map');
var regionRouter = require('./routes/region');
var municipioRouter = require('./routes/municipio');

require('./connection');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/map', mapRouter);
app.use('/region', regionRouter);
app.use('/municipio', municipioRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
