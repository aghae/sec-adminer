
const express = require('express');
const https = require('https');
const path = require("path"); 
const fs = require("fs"); 
const php = require("node-php"); 
const app = express();


var options = {
	key: fs.readFileSync(path.join(__dirname,'ssl/private.key')),
	cert: fs.readFileSync(path.join(__dirname,'ssl/certificate.pem'))
};

var httpsPort = process.env.port  || 8443;
var secureServer = https.createServer(options, app).listen(httpsPort);

//Serve PHP
app.use("/", php.cgi(__dirname+'/miner')); 

console.log(`Server listening SSL port : ${httpsPort}\nGoto https://localhost:${httpsPort}`);

