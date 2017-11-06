//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = require('./router/message.router.js');

//mongoose
var mongoose = require('mongoose');
var databaseUrl = 'mongod://localhost:27017/message';

mongoose.connection.on('connected', function(){
    console.log('we got a mongoose');
});
mongoose.connect(databaseUrl);

//global
var port= process.env.PORT || 5000; 

//uses 
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/messages', messages);

//spin up server
app.listen(port, function () {
    console.log('listening on port', port);
});



