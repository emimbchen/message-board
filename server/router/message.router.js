var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({ name: String, message: String});
var Message = mongoose.model('message', MessageSchema, 'messages');

//get
router.get('/', function(req,res){
    Message.find({}, function(err, foundMessage){
        if(err){
            console.log('Error in Message get: ', err);
        } else{
            res.send(foundMessage);
            console.log('sending messages!');
        }
    });
});

//post

router.post('/', function (req ,res){
    console.log(req.body);
    var messageToAdd = new Message(req.body);
    messageToAdd.save(function (err, data){
        if(err) {
            console.log("error in the message Post: ", err);
        } else{
            res.sendStatus(201);
        }
    });
});

module.exports = router;