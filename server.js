var http = require('http');



var handler = function (req, res) {
    switch (req.url) {
        default:
        case '/':
            res.write("hello nodejs");
            res.end();
            break;

            

        case '/products':
            res.write("Products page");
            res.end();
            break;
    }
}


var server = http.createServer(handler);

server.listen(3000, function () {
    console.log('server running on 3000');
});

// console.log('hello nodejs');