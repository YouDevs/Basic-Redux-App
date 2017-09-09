"use strict"
var express = require('express');
var app = express();
var path = require('path');

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.reslve(__dirname, 'public', 'index.html'))
});

app.listen(3000, function(){
    console.log('Web-server is run in port 3000!');
})
