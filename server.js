var express = require('express');
var app = express();

// Create an express route for the home page
app.get('/', function(req, res) {
  var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('index.html', options);
});


// Start server om port 8080
app.listen(8080);
console.log('Server listening on port 8080!');