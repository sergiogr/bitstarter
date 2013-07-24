var express = require('express');
var fs = require('fs');

var readFromFile = function(file) {
  var buf = fs.readFileSync(file);
  return buf.toString();
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = readFromFile('index.html');
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
