import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/models';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const JSON_HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${BASE_URL}/todos`);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${BASE_URL}/todos/${id}`);
  }

  createTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>(`${BASE_URL}/todos`, todo, { headers: JSON_HEADERS });
  }

  updateTodo(id: number, todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.put<Todo>(`${BASE_URL}/todos/${id}`, todo, { headers: JSON_HEADERS });
  }

  deleteTodo(id: number): Observable<object> {
    return this.http.delete<object>(`${BASE_URL}/todos/${id}`);
  }
}
