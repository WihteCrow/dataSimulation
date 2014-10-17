/**
 * Created by crow on 14-10-6.
 */

var http = require('http');
var path = require('path');
var requestGet = require('./lib/get');
var requestPost = require('./lib/post');

http.createServer(function(request, response){

    response.writeHead(200, {
        'content-type' : 'text/html;charset=utf-8'

    });


    if(request.method == 'GET'){
        var data = requestGet(request);
        response.write(JSON.stringify(data));
        response.write(path);
    }else if(request.method == 'POST'){
        requestPost(request);
    }

    response.end();

}).listen(80);
