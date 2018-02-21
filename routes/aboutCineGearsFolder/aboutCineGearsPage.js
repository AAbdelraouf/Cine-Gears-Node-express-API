var express = require('express');
var router = express.Router();
var fs = require('fs')

var app = express();

app.get('/', function(req, res){
//    res.send("About cine gears page!");
var contents = fs.readFileSync('./srcCode/aboutCinegearsCode/aboutCineGearsPage.html', 'utf8');
res.send(contents);
});

module.exports = router
