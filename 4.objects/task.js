function Student(name, gender, age) {
	let student_1 = new Object();
	let student_2 = new Object();
	let student_3 = new Object();
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks != undefined) {
		this.marks.push(...marks);
	} else {
		return;
	}
}
Student.prototype.getAverage = function() {
	this.marks in Object;
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	}
	return this.marks.reduce((acc, item, index, arr) => acc += item / arr.length, 0);
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}



