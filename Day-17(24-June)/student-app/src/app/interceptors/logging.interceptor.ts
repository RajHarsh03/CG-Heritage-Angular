import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`[LoggingInterceptor] ${req.method} ${req.url}`);

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log(`[LoggingInterceptor] Response status: ${event.status} for ${req.url}`);
      }
    })
  );
};
