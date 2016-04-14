var jade = require('jade');
var fs = require('fs');
var listCategory = {
    categories : [
                    {
                        id: 1,
                        name : "Ngôn ngữ lập trình",
                        listsubcates : [
                            {
                                id : 11,
                                name : ".NET"   
                            },
                            {
                                id : 12,
                                name : "PHP"   
                            },
                            {
                                id : 13,
                                name : "Java"   
                            }
                        ]    
                    },
                    {
                        id: 2,
                        name : "Hệ cơ sở dữ liệu",
                        listsubcates : [
                            {
                                id : 21,
                                name : "MS SQL Server"   
                            },
                            {
                                id : 22,
                                name : "MySQL"   
                            },
                            {
                                id : 23,
                                name : "Oracle"   
                            }
                        ]    
                    },
                    {
                        id: 3,
                        name : "Hệ điều hành",
                        listsubcates : [
                            {
                                id : 21,
                                name : "Windows"   
                            },
                            {
                                id : 32,
                                name : "MAC OSX"   
                            },
                            {
                                id : 33,
                                name : "Linux"   
                            }
                        ]    
                    }
                ]
};
var jadetemplate = jade.compile(fs.readFileSync('template.jade', 'utf8'));
var html = jadetemplate(listCategory);
 
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write(html);
    response.end();
}).listen(8081);