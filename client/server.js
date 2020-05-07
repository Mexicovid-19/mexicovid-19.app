var express = require("express");
var morgan = require("morgan");
var compression = require('compression');
var helmet = require('helmet');
var https = require('https');
var fs = require('fs');

var app = express();
app.use(helmet());
app.use(compression()); 

app.use(morgan("combined"));

// Serve the static files from the build folder
app.use(express.static( __dirname + "/build"));
//app.use('/material-dashboard-react', express.static(__dirname + "/build"));
// Redirect all traffic to the index
app.get("*", function(req, res){
  res.sendFile(__dirname + "/build/index.html");
});
// Listen to port 3000
//app.listen(process.env.PORT || 3000);

var options = {
    key: fs.readFileSync(__dirname + '/cert/mexicovid19.key.pem'),
    cert: fs.readFileSync(__dirname + '/cert/mexicovid19_app.crt.pem'),
    ca: fs.readFileSync(__dirname + '/cert/mexicovid19_app.ca-bundle')
};
  
  /**
   * Create HTTP server.
   */
  
  //var server = http.createServer(app);
  // Create an HTTP service.
  //http.createServer(app);
  // Create an HTTPS service identical to the HTTP service.
  var server = https.createServer(options, app).listen(3000);
  /**
   * Listen on provided port, on all network interfaces.
   */
  
  //server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
  
  /**
   * Normalize a port into a number, string, or false.
   */
  
  function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  
  /**
   * Event listener for HTTP server "error" event.
   */
  
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {
    var addr = server.address();
    console.log("server", addr)
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  }