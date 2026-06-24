import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {

  private students: Student[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', course: 'Angular', grade: 'A' },
    { id: 2, name: 'Bob Smith',     email: 'bob@example.com',   course: 'TypeScript', grade: 'B' },
    { id: 3, name: 'Carol White',   email: 'carol@example.com', course: 'Angular', grade: 'A' },
    { id: 4, name: 'David Brown',   email: 'david@example.com', course: 'React', grade: 'C' },
    { id: 5, name: 'Eva Green',     email: 'eva@example.com',   course: 'TypeScript', grade: 'B' },
    { id: 6, name: 'Frank Lee',     email: 'frank@example.com', course: 'React', grade: 'A' },
  ];

  private subject = new BehaviorSubject<Student[]>(this.students);
  students$: Observable<Student[]> = this.subject.asObservable();

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  addStudent(student: Omit<Student, 'id'>): void {
    const newStudent: Student = { ...student, id: this.students.length + 1 };
    this.students.push(newStudent);
    this.subject.next([...this.students]);
  }

  updateStudent(id: number, updated: Partial<Student>): void {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      this.students[index] = { ...this.students[index], ...updated };
      this.subject.next([...this.students]);
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(s => s.id !== id);
    this.subject.next([...this.students]);
  }

  searchStudents(query: string): Student[] {
    const q = query.toLowerCase();
    return this.students.filter(
      s => s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q)
    );
  }

  getStudentsByCourse(course: string): Student[] {
    return this.students.filter(s => s.course.toLowerCase() === course.toLowerCase());
  }

  getGradeStats(): { [grade: string]: number } {
    return this.students.reduce((acc, s) => {
      acc[s.grade] = (acc[s.grade] || 0) + 1;
      return acc;
    }, {} as { [grade: string]: number });
  }
}
