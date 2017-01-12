var express = require('express');
var path = require('path');
var chalk = require('chalk');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green('Running on PORT: ' + port));
    }
});