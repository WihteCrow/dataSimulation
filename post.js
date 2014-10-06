/**
 * Created by crow on 14-10-6.
 */

var http = require('http');
var querystring = require('querystring');

http.createServer(function(request, response){
    var postDate = '', responseString = '';
    response.writeHead(200, {
        'content-type' : 'text/html'
    });

    request.setEncoding('utf8');
    request.addListener('data', function(postDataChunk){
        postDate += postDataChunk;
    });

    request.addListener('end', function(){
        objectPostData = querystring.parse(postDate);

        for(var i in objectPostData){
            responseString += i + '=>' + objectPostData[i] + '<br/>';
        }

        response.write(responseString);
        response.end();
    });
}).listen(8088);