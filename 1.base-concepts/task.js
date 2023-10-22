"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d < 0) {
		arr = d;
	}
	if (d === 0) {
		arr = -b / (2 * a);
	} else if (d > 0) {
		let res = []
		res.push((-b + Math.sqrt(d)) / (2 * a));
		res.push((-b - Math.sqrt(d)) / (2 * a));
		arr = res;
	}
	return arr;
}

console.log(solveEquation(10, 10000, 7));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (p + (p / ((Math.pow((1 + p), countMonths)) - 1)));
	let summ = monthlyPayment * countMonths;
	let res = +summ.toFixed(2);
	return res;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12))