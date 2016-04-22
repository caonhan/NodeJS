/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express-serve-static-core/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/node/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/serve-static/index.d.ts" />

var express = require('express');
var app = express();
app.get('/home',function (req, res) {
    res.end('Hello World!');
});
app.listen(process.argv[2] || 8081);
