var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
var numOfLines = data.toString().split('\n').length-1;

console.log(numOfLines);
