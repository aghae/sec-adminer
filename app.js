
const express = require('express');
const https = require('https');
const path = require("path"); 
const fs = require("fs"); 
// const php = require("node-php"); 
const php = require("./php/php.js"); 
const app = express();

var exec = require("child_process").exec;


var options = {
	key: fs.readFileSync(path.join(__dirname,'ssl/private.key')),
	cert: fs.readFileSync(path.join(__dirname,'ssl/certificate.pem'))
};

var httpsPort = process.env.port  || 8443;
var secureServer = https.createServer(options, app).listen(httpsPort);

//Serve PHP
app.use("/", php.cgi(__dirname+'/miner',"./php/phpcgi")); 

// app.use("/",function(req, res){
// 	 exec(`php-cgi  ${__dirname}/miner/index.php	`, (error, stdout, stderr)=>{
// 		console.log(stdout)
// 		return  res.send(stdout)
// 		});
// })

console.log(`Server listening SSL port : ${httpsPort}\nGoto https://localhost:${httpsPort}`);

