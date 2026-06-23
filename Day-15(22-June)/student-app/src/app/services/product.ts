import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User, Todo, NewTodo, PartialUser, Product } from '../models/models';
import { ErrorDemoService } from './error-demo';

const BASE = 'https://jsonplaceholder.typicode.com';

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Laptop Pro',          price: 1299.99, description: '15" display, 16GB RAM' },
  { id: 2, name: 'Wireless Mouse',      price: 29.99 },
  { id: 3, name: 'USB-C Hub',           price: 49.99,  description: '7-in-1 adapter' },
  { id: 4, name: 'Mechanical Keyboard', price: 89.99 },
  { id: 5, name: 'Monitor Stand',       price: 34.99,  description: 'Adjustable height' },
];

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorDemoService) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE}/users`).pipe(catchError(this.errorService.handleError));
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${BASE}/todos`).pipe(catchError(this.errorService.handleError));
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${BASE}/todos/${id}`).pipe(catchError(this.errorService.handleError));
  }

  createTodo(data: NewTodo): Observable<Todo> {
    return this.http.post<Todo>(`${BASE}/todos`, data).pipe(catchError(this.errorService.handleError));
  }

  patchUser(id: number, data: PartialUser): Observable<User> {
    return this.http.patch<User>(`${BASE}/users/${id}`, data).pipe(catchError(this.errorService.handleError));
  }

  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      observer.next(MOCK_PRODUCTS);
      observer.complete();
    });
  }
}
