import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { StudentService, Student } from './student.service';
import { EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const studentResolver: ResolveFn<Student> = (route) => {
  const studentService = inject(StudentService);
  const router = inject(Router);
  const id = Number(route.paramMap.get('id'));

  return studentService.getStudent(id).pipe(
    mergeMap((student) => {
      if (student) {
        return [student];
      }
      router.navigate(['/not-found']);
      return EMPTY;
    })
  );
};
