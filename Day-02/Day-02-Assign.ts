// 1.Create variables: name, age, city, and course using appropriate TypeScript data types.

let studentName: String = "Harsh Raj";
let age: Number = 22;
let studentCourse: String = "Computer Science";
let city: String = "Kolkata";

// 2. Create one variable using 'let' and one using 'const'. Explain the difference in comments.

// 'let' allows you to declare a variable that can be reassigned later,
// while 'const' declares a variable that cannot be reassigned after its initial assignment.

// 'let' and 'const' are block-scoped, meaning they are only accessible within the block they are defined in.

// Example of 'let' variable
let studentID: String = "STU01";
studentID = "STU02"; // This is allowed because 'studentID' is declared with 'let'.

// Example of 'const' variable
const studentRollNumber: String = "ROLL01";
// studentRollNumber = "ROLL02"; // This would cause a compile-time error because 'studentRollNumber' is declared with 'const'.

//3. Create variables of type string, number, and boolean.
let courseName: String = "Angular Development";
let courseDuration: Number = 6;
let isEnrolled: Boolean = true;

// 4. Create an interface named Student with id, name, branch, and age properties.
interface Student {
  id: String;
  name: String;
  branch: String;
  age: Number;
}

// 5. Create variables in app.component.ts and display them in app.component.html using interpolation {{ }}.

// app.component.ts

/* export class App {
  protected readonly title = signal('student-app');
  studentID:String = "STU01";
  studentName:String = "Harsh Raj";
  studentBranch:String = "Computer Science";
  age:Number = 22;
  city:String = "Kolkata";
} */


// app.component.html

/* <h2>{{studentID}}</h2>
<h2>{{studentName}}</h2>
<p>{{studentBranch}}</p>
<p>{{age}}</p>
<p>{{city}}</p> */