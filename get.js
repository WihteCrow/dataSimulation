/**
 * Created by crow on 14-10-6.
 */

//引入http模块
var http = require('http');

//引入url模块
var url = require('url');

//引入querystring模块
var querystring = require('querystring');

http.createServer(function(request, response){
    var objectUrl = url.parse(request.url);
    var objectQuery = querystring.parse(objectUrl.query);

    response.writeHead(200, {
        'content-type' : 'text/html'
    });

    console.log(objectUrl, objectQuery);

    response.end();
}).listen(8088);