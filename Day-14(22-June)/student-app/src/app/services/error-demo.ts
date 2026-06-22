import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const BASE = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class ErrorDemoService {
  constructor(private http: HttpClient) {}

  fetchBadEndpoint(): Observable<unknown> {
    return this.http.get(`${BASE}/api/wrong-endpoint`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  fetchValidEndpoint(): Observable<unknown> {
    return this.http.get(`${BASE}/todos/1`).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    let userMessage = 'An unexpected error occurred. Please try again.';

    if (error.status === 0) {
      userMessage = 'Network error: Unable to reach the server. Check your connection.';
    } else {
      switch (error.status) {
        case 400: userMessage = '400 Bad Request — The request was invalid or malformed.'; break;
        case 401: userMessage = '401 Unauthorized — You are not authenticated. Please log in.'; break;
        case 403: userMessage = '403 Forbidden — You do not have permission to access this resource.'; break;
        case 404: userMessage = '404 Not Found — The requested resource could not be found.'; break;
        case 500: userMessage = '500 Internal Server Error — Something went wrong on the server.'; break;
        default:  userMessage = `Unexpected error (${error.status}): ${error.statusText}`;
      }
    }

    console.error('[handleError] HTTP Error:', error);
    return throwError(() => new Error(userMessage));
  }
}
