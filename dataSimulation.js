/**
 * Created by crow on 14-10-6.
 */

var http = require('http');
var requestGet = require('./get');
var requestPost = require('./post');

http.createServer(function(request, response){

    response.writeHead(200, {
        'content-type' : 'text/html;charset=utf-8'
    });


    if(request.method == 'GET'){
        var data = requestGet(request);
        response.write(JSON.stringify(data));
    }else if(request.method == 'POST'){
        requestPost(request);
    }

    response.end();

}).listen(8088);