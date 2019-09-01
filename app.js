
var express = require('express');
var https = require('https');
var path = require("path"); 
var fs = require("fs"); 
var php = require("node-php"); 
var path = require("path"); 
var app = express();


var options = {
	key: fs.readFileSync(path.join(__dirname,'ssl/private.key')),
	cert: fs.readFileSync(path.join(__dirname,'ssl/certificate.pem'))
};

var httpsPort = process.env.port  || 8443;
var secureServer = https.createServer(options, app).listen(httpsPort);

//Serve PHP
app.use("/", php.cgi(__dirname+'/miner')); 

console.log(`Server listening SSL port : ${httpsPort}\nGoto https://localhost:${httpsPort}`);

