import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-app');
  studentID:String = "STU01";
  studentName:String = "Harsh Raj";
  studentBranch:String = "Computer Science";
  age:Number = 22;
  city:String = "Kolkata";
}