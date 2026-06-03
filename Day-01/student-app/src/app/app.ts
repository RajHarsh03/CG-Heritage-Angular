import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-app');
  studentName:String = "Harsh Raj";
  age:Number = 22;
  city:String = "Kolkata";
}
