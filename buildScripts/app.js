import express from 'express';
import path from 'path';
import chalk from 'chalk';

const app = express();

const port = process.env.PORT || 3000;

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