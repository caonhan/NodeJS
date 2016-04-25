var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function (req, res) {
    var fileName= process.argv[3] || './public/test.txt';
    fs.readFile(fileName, function (err, data) {
        if(err) {
            return res.sendStatus(500);
        }
        try {
            books = JSON.parse(data);
        } catch (err) {
            res.sendStatus(500);
        }
        res.json(books);
    });
});

app.listen(process.argv[2] || 8081);