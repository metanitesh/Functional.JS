"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(lotteryNum, luckyLotteryNumbers) {
	if(luckyLotteryNumbers.includes(lotteryNum)){
		return luckyLotteryNumbers
	}

	return [...luckyLotteryNumbers, lotteryNum]
				 .sort((a,b) => a -b)
	
}

function generateLuckyLotteryNumbers(){
	var luckyLotteryNumbers = [];
	
	while (luckyLotteryNumbers.length < 6) {
		luckyLotteryNumbers = pickNumber(lotteryNum(), luckyLotteryNumbers);
	}

	return luckyLotteryNumbers
}

console.log(generateLuckyLotteryNumbers());
