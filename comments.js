// Create web server with Express
// Create a route to handle POST requests to '/comments'
// Use the body-parser middleware to parse the request body
// Respond with the value of the 'comment' key in the request body
// Use the correct function in the body-parser module to parse the request body
// Use the correct method in the Express module to create the POST route

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/comments', function(req, res) {
  res.send(req.body.comment);
});

app.listen(4001);