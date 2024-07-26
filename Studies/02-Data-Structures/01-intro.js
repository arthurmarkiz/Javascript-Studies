/* 

WHAT DO THEY DO?
Data structures are collections of values,
the relationships among them, and the functions
or operations that can be applied to the data.

WHY HAVE SO MANY??
Different data structures exel at different things.
Some are highly specialized, while others (like arrays)
are more generally used.

==========================================================

WHAT IS A CLASS??
A blueprint for creating objects with pre-defined properties and methods.
We're going to implement data structures as classes!
*/

// THE CLASS SYNTAX
// The method to create new objects must be called constructor.
class Student {
  constructor(firstName, lastName, gradeYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = gradeYear;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3)
      return `${this.firstName} ${this.lastName} ARE EXPELLED!!!`;

    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calcAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    let average = sum / this.scores.length;
    return `${this.firstName} has average of ${average}.`;
  }
}

// Creating objects from classes
// Using the 'new' keyword

let firstStudent = new Student("Arthur", "Markiz", 3);
let secondStudent = new Student("Colt", "Steele", 1);

// Calling instance methods

console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log("--------");
console.log(firstStudent.markLate());
console.log("--------");
console.log(firstStudent.markLate());
console.log("--------");
console.log(firstStudent.addScore(12));
console.log(firstStudent.addScore(46));
console.log(firstStudent.calcAverage());
