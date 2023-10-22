"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d < 0) {
		arr;
	}
	if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else if (d > 0) {
		let root_1 = (-b + Math.sqrt(d)) / (2 * a);
		let root_2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root_1);
		arr.push(root_2)
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