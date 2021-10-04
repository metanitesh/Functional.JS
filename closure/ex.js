"use strict";

function strBuilder(str, args= []) {
	if(typeof str !== 'string'){
		return args.reverse().join("")
	}

	return function(str2){
		const prevStr = [str, ...args]
		return strBuilder(str2, prevStr)
	}
}


var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();


console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(susan() === "Hello, Susan");
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");
