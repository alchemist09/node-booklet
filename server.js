require('dotenv').config();
var express = require('express');
var ig = require('instagram-node').instagram();
var app = express();
ig.use({
  access_token: process.env.MY_ACCESS_TOKEN
});

// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

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
  res.render('pages/index', options);
});


// Start server om port 8080
app.listen(8080);
console.log('Server listening on port 8080!');