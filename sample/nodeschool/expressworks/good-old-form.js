/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express-serve-static-core/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/node/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/serve-static/index.d.ts" />
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
    res.send(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2] || 8081);