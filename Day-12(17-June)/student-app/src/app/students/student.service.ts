import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
  subject: string;
  gpa: number;
}

const MOCK_STUDENTS: Student[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    age: 20,
    grade: 'A',
    email: 'alice@example.com',
    subject: 'Computer Science',
    gpa: 3.9,
  },
  {
    id: 2,
    name: 'Bob Martinez',
    age: 22,
    grade: 'B+',
    email: 'bob@example.com',
    subject: 'Mathematics',
    gpa: 3.5,
  },
  {
    id: 3,
    name: 'Clara Thompson',
    age: 21,
    grade: 'A-',
    email: 'clara@example.com',
    subject: 'Physics',
    gpa: 3.7,
  },
  {
    id: 4,
    name: 'David Lee',
    age: 23,
    grade: 'B',
    email: 'david@example.com',
    subject: 'Chemistry',
    gpa: 3.3,
  },
  {
    id: 5,
    name: 'Eva Brown',
    age: 20,
    grade: 'A+',
    email: 'eva@example.com',
    subject: 'Biology',
    gpa: 4.0,
  },
];

@Injectable({ providedIn: 'root' })
export class StudentService {
  getStudents(): Observable<Student[]> {
    return of(MOCK_STUDENTS);
  }

  getStudent(id: number): Observable<Student | undefined> {
    const student = MOCK_STUDENTS.find((s) => s.id === id);
    return of(student);
  }
}
