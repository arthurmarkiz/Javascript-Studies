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
  }
}

// Creating objects from classes
// Using the 'new' keyword

let firstStudent = new Student("Arthur", "Markiz", 3);
let secondStudent = new Student("Colt", "Steele", 1);
