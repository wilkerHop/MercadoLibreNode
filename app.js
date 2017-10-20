var express = require('express');
var auth = require('./tests/testAuth.js');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname });
});

app.post('/auth', function(req, res) {
	auth.oAuthExample();
    console.log('oAuthExample Ended!');
});


app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
});