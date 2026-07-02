import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

class Student {
  id: number;
  name: string;
  course: string;

  constructor(id: number, name: string, course: string) {
    this.id = id;
    this.name = name;
    this.course = course;
  }

  getDetails(): string {
    return `Student ID: ${this.id} | Name: ${this.name} | Course: ${this.course}`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  student = new Student(1, 'Harsh', 'Angular');

  details = `Student ID: ${this.student.id} | Name: ${this.student.name} | Course: ${this.student.course}`;
}
