import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.warn(`[ErrorInterceptor] ${req.method} ${req.url} → ${error.status} ${error.statusText}`);

      if (error.status === 401) {
        console.warn('[ErrorInterceptor] Unauthorized — consider redirecting to /login');
      }

      return throwError(() => error);
    })
  );
};
