// Author: Yuri V.S
// Source: Chris Danan, Sarah Lee
//
// CPSC473 Assignment 6 - build the client-side of a web application to play
//                        Rock, Paper, Scissors, Lizard, Spock
//
// Rule :   Rock can beat Lizard and Scissors
//          Paper can beat Rock and Spock
//          Lizard can beat Spock and Paper
//          Scissors can beat Lizards and Paper
//          Spock can beat Rock and Scissors
//          http://www.samkass.com/theories/RPSSL.html    
//
 
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */


"user strict";
var express = require("express"),
	http = require("http"),
	app = express();

//configure the app to use the client directory for static files
app.use(express.static(__dirname + "/client"));

//create server and have it listen
/*
server = http.createServer(function (req, res){
	res.wrteHead(200, {"Content-Type": "application/json"});
	getPost(req, res);
	res.end();
	*/

http.createServer(app).listen(3000);
console.log("Server listening on port 3000");

//server.listen(3000);
//console.log("Server listening on port 3000");

//set up routes
app.get("/", function (res, req){
	res.render("index");
});