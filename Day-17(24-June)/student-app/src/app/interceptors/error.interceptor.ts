import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast';
import { ErrorLogService } from '../services/error-log';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router     = inject(Router);
  const toast      = inject(ToastService);
  const errorLog   = inject(ErrorLogService);

  return next(req).pipe(
    retry(2),
    catchError((error: HttpErrorResponse) => {
      let message = 'Something went wrong. Please try again.';

      switch (error.status) {
        case 400:
          message = 'Bad request. Please check your input.';
          break;
        case 401:
          message = 'Unauthorized. Redirecting to login...';
          localStorage.removeItem('token');
          router.navigate(['/login']);
          break;
        case 403:
          message = 'Access denied. You do not have permission.';
          break;
        case 404:
          message = 'Resource not found.';
          break;
        case 500:
          message = 'Server error. Please try again later.';
          console.error('[ErrorInterceptor] 500:', error);
          break;
      }

      toast.show(message, 'error');
      errorLog.add(error.status, message, req.url);

      return throwError(() => error);
    })
  );
};
