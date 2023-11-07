function parseCount(value) {
	const result = Number.parseFloat(value);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

function testCase() {
	//позитивные
	console.log(parseCount("5.364748"));
	console.log(validateCount("5.473738"));
	console.log(parseCount("5"));
	console.log(validateCount("5"));
	console.log(parseCount("0.0123E+3"));
	console.log(validateCount("0.0123E+3"));
	console.log(parseCount(Infinity));
	console.log(validateCount(Infinity));
	console.log(parseCount(-Infinity));
	console.log(validateCount(-Infinity));
	//негативные
	console.log(parseCount("shdhdh"));
	console.log(validateCount("shdhdh"));
	console.log(parseCount(null));
	console.log(validateCount(null));
	console.log(parseCount(undefined));
	console.log(validateCount(undefined));
	console.log(parseCount(""));
	console.log(validateCount(""));
	console.log(parseCount("  "));
	console.log(validateCount("  "));
}

class Triangle {
	constructor(side_1, side_2, side_3) {
		if (side_1 + side_2 < side_3 || side_2 + side_3 < side_1 || side_1 + side_3 < side_2) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
		this.side_1 = side_1;
		this.side_2 = side_2;
		this.side_3 = side_3;
	}

	get perimeter() {
		return this._perimeter = this.side_1 + this.side_2 + this.side_3;
	}

	get area() {
		let p = 1 / 2 * (this.side_1 + this.side_2 + this.side_3);
		let ariaTriangle = Math.sqrt(p * (p - this.side_1) * (p - this.side_2) * (p - this.side_3));
		return +ariaTriangle.toFixed(3);
	}
}

function getTriangle(side_1, side_2, side_3) {
	try {
		return new Triangle(side_1, side_2, side_3);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}

function testCase_2(){
    const triangle = new Triangle(5, 6, 7);
    console.log(triangle.perimeter);
    console.log(triangle.area);
    const triangle_1 = new Triangle(1, 3, 10);
    console.log(triangle_1);
    const triangle_2 = new Triangle(10, 1, 3);
    console.log(triangle_2);
    const triangle_3 = new Triangle(1, 10, 3);
    console.log(triangle_3);
    const triangle_4 = new Triangle(0, 0, 0);
    console.log(triangle_4);
}
