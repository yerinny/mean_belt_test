var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname +'/public/dist/public'));

mongoose.connect('mongodb://localhost/test');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})