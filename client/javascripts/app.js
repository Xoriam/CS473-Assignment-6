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
// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
 
var main = function() {
	$.getJSON("/counts.json", function (resultCounts){
		// Now "resultCounts" will be the object that
		// is returned by the counts.json route we
		// set up in Express
		console.log(resultCounts);
	});
}
$(document).ready(main);