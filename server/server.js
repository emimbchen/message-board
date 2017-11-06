//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//mongoose
var mongoose = require('mongoose');
var databaseUrl = 'mongod://localhost:27017/message';

mongoose.connection.on('connected', function(){
    console.log('we got a mongoose');
});
mongoose.connect(databaseUrl);
//global
var port= process.env.PORT || 5000; // can use 4000-60000

//uses 
app.use(bodyParser.json());
app.use(express.static('server/public'));

//spin up server
app.listen(port, function () {
    console.log('listening on port', port);
});