import { Routes } from '@angular/router';
import { studentResolver } from './student.resolver';

export const STUDENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./student-list/student-list.component').then(
        (m) => m.StudentListComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./student-detail/student-detail.component').then(
        (m) => m.StudentDetailComponent
      ),
    resolve: { student: studentResolver },
  },
];
