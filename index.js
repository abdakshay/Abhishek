/*
Index.js
*/
var express = require('express');
var path = require('path');
var app = express();
port = process.env.PORT || process.argv[2] || 8081;
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
// create a simple server

var Home = require('./Home.js');
var Org = require('./org.js');
app.use('/', Home);
app.use('/data', Org);
// listen on the port
app.listen(port, function () {
    console.log('app up on port: http://localhost:' + port);
});
