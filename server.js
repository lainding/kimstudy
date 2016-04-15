var http = require('http'),
  serveStatic = require('serve-static'),
  connect = require('connect');

var app = connect();
var server = http.createServer(app);

app.use('/', serveStatic(__dirname + "/public"));

server.listen(8000, "0.0.0.0");
