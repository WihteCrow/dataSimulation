/**
 * Created by crow on 14-10-6.
 */

//引入url模块
var url = require('url');
var fs = require('fs');
var getApi = require('../URL_PATH/URL_PATH');


//引入querystring模块
var querystring = require('querystring');

function getFun(request){

    var objectUrl = url.parse(request.url);
    var URL = getApi(objectUrl.href.split('?')[0]);
    console.log(URL);

    var data = fs.readFileSync('./JSON/'+ URL +'.json', 'utf8');


    var objectQuery = querystring.parse(objectUrl.query);
    console.log(objectQuery);

    return JSON.parse(data);

}

module.exports = getFun;


