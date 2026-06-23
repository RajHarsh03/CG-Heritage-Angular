import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, tap, takeUntil, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { User, Todo } from '../../models/models';

const BASE = 'https://jsonplaceholder.typicode.com';

interface UserSummary { id: number; name: string; email: string; }

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.html',
  styles: [`
    .container  { max-width: 800px; margin: 0 auto; padding: 1rem; }
    h2  { color: #333; }
    h3  { color: #555; margin-top: 2rem; border-bottom: 1px solid #eee; padding-bottom: 0.4rem; }
    .user-card  { background: #f9f9f9; border: 1px solid #ddd; border-radius: 6px;
                  padding: 0.75rem 1rem; margin-bottom: 0.5rem;
                  display: flex; justify-content: space-between; align-items: center; }
    .user-card span { font-size: 0.85rem; color: #666; }
    input { width:100%; padding:0.4rem 0.6rem; border:1px solid #ccc; border-radius:4px; box-sizing:border-box; margin-bottom:0.75rem; }
    .todo-item  { padding: 0.45rem 0.75rem; margin-bottom: 0.3rem; border-radius: 4px;
                  font-size: 0.88rem; display:flex; align-items:center; gap:0.5rem; }
    .todo-done    { background:#d4edda; color:#155724; }
    .todo-pending { background:#fff3cd; color:#856404; }
    button  { padding:0.35rem 0.9rem; background:#007bff; color:#fff; border:none; border-radius:4px; cursor:pointer; }
    .info    { color: #888; font-style: italic; }
    .loading { color: #888; font-style: italic; }
    .stats   { display:flex; gap:1rem; margin-bottom:0.5rem; font-size:0.85rem; }
    .stat    { background:#e9ecef; border-radius:4px; padding:0.3rem 0.7rem; }
  `]
})
export class UsersComponent implements OnInit, OnDestroy {
  allUsers: UserSummary[]      = [];
  filteredUsers: UserSummary[] = [];
  selectedUserTodos: Todo[]    = [];
  selectedUserName             = '';
  completedCount               = 0;
  pendingCount                 = 0;
  loadingTodos                 = false;

  searchControl  = new FormControl('');
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<User[]>(`${BASE}/users`).pipe(
      tap((raw) => console.log('[tap] Raw /users response:', raw)),
      map((users) => users.map(u => ({ id: u.id, name: u.name, email: u.email }))),
      takeUntil(this.destroy$)
    ).subscribe(summaries => {
      this.allUsers      = summaries;
      this.filteredUsers = summaries;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(term => {
      const q = (term ?? '').toLowerCase();
      this.filteredUsers = this.allUsers.filter(u => u.name.toLowerCase().includes(q));
    });
  }

  loadUserTodos(user: UserSummary): void {
    this.loadingTodos     = true;
    this.selectedUserName = user.name;
    this.selectedUserTodos = [];
    this.completedCount   = 0;
    this.pendingCount     = 0;

    this.http.get<User>(`${BASE}/users/${user.id}`).pipe(
      tap(u => console.log('[switchMap] Fetched user:', u.name)),
      switchMap(u => this.http.get<Todo[]>(`${BASE}/todos?userId=${u.id}`)),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (todos) => {
        this.selectedUserTodos = todos;
        this.completedCount    = todos.filter(t => t.completed).length;
        this.pendingCount      = todos.filter(t => !t.completed).length;
        this.loadingTodos      = false;
        console.log(`[switchMap] Todos for ${user.name}:`, todos);
      },
      error: () => { this.loadingTodos = false; }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
