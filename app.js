var http = require('http');
//var numeral = require('numeral');
var findRandomNumber = require('./findRandomNumber');
var convertToUSD = require('./convertToUSD');
var doesSomething = require('./doesSomething');


http.createServer(function(request, response){
    response.writeHead(200);
    //response.write(findRandomNumber(100,1000000));
    //response.write(convertToUSD(53256));
    response.write(doesSomething());
    response.end();
}).listen(8000);




module.exports = http;