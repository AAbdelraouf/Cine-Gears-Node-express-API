var express = require('express');
var app = express();
var fs = require('fs');

// var aboutCineGears = require('./routes/aboutCineGearsFolder/aboutCineGearsPage.js')
// app.use('/about', aboutCineGears)
// app.use(express.static('routes'));
// app.use(express.static('srcCode'));

// Main Page //
app.get('/', function(req, res){
var contents = fs.readFileSync('./srcCode/mainPageFolder/index.html', 'utf8');
res.send(contents);
});

app.get('/home', function(req, res){
    var scontents = fs.readFileSync('./srcCode/aboutCinegearsCode/aboutCineGearsPage.html', 'utf8');
    res.send(scontents);
});

app.listen(3000);