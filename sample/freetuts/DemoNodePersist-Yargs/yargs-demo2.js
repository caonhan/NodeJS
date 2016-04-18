var yargs = require('yargs');
 
var get_argv = yargs.command('get', 'Get List Students', function (yargs) {
 
    return yargs.options({
        username : { // cấu hình cho name
            demand : true,
            type : 'string',
            alias: 'us' //alias la mot ky tu thi chi can mot dau - khi chạy cmd
            // ...
        },
        email: { // cấu hình cho email
            demand : true
            // ...
        }
    });
 
}).argv;

// In ra xem thử
console.log(get_argv);