/**
 * Created by crow on 14-10-6.
 */

//引入url模块
var url = require('url');
var fs = require('fs');


//引入querystring模块
var querystring = require('querystring');

function getFun(request){

    var data = fs.readFileSync('./JSON/planType.json', 'utf8');

    var objectUrl = url.parse(request.url);
    var objectQuery = querystring.parse(objectUrl.query);

    return JSON.parse(data);

}

module.exports = getFun;


