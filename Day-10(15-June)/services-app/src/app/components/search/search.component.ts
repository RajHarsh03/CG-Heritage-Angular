import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {

  query = '';
  allStudents: Student[] = [];
  filtered: Student[] = [];
  gradeStats: { [grade: string]: number } = {};

  private search$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.students$.pipe(takeUntil(this.destroy$)).subscribe(students => {
      this.allStudents = students;
      this.filtered = students;
    });

    this.gradeStats = this.studentService.getGradeStats();

    this.search$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(q => {
      this.filtered = q.trim()
        ? this.studentService.searchStudents(q)
        : this.allStudents;
    });
  }

  onSearch(value: string): void {
    this.search$.next(value);
  }

  onFilterByCourse(course: string): void {
    this.filtered = course
      ? this.studentService.getStudentsByCourse(course)
      : this.allStudents;
    this.query = '';
  }

  get courses(): string[] {
    return [...new Set(this.allStudents.map(s => s.course))];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
