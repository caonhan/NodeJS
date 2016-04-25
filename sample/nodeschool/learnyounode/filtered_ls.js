/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express-serve-static-core/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/node/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/serve-static/index.d.ts" />
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        return console.error(err);
    }
    for (var index = 0; index < list.length; index++) {
        if(path.extname(list[index]) === '.' + process.argv[3]) {
            console.log(list[index]);        
        }
    }
});