/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express-serve-static-core/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/express/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/node/index.d.ts" />
/// <reference path="D:/Github/NodeJS/sample/typings/browser/ambient/serve-static/index.d.ts" />
var filterFn = require('./support_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})