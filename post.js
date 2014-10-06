/**
 * Created by crow on 14-10-6.
 */

var querystring = require('querystring');

function postFun(request){
    var postDate = '', responseString = '';

    request.setEncoding('utf8');
    request.addListener('data', function(postDataChunk){
        postDate += postDataChunk;
    });

    request.addListener('end', function(){
        objectPostData = querystring.parse(postDate);

        for(var i in objectPostData){
            responseString += i + '=>' + objectPostData[i] + '<br/>';
        }
    });
}

module.exports = postFun;