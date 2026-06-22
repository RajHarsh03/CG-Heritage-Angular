import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../services/data';
import { Todo } from '../../models/models';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './posts.html',
  styles: [`
    .container { max-width: 800px; margin: 0 auto; padding: 1rem; }
    h2 { color: #333; }
    h3 { color: #555; margin-top: 2rem; border-bottom: 1px solid #eee; padding-bottom: 0.4rem; }
    .todo-card { background: #f9f9f9; border: 1px solid #ddd; border-radius: 6px;
                 padding: 0.75rem 1rem; margin-bottom: 0.5rem;
                 display: flex; justify-content: space-between; align-items: center; }
    .todo-card .title { text-transform: capitalize; font-size: 0.95rem; }
    .todo-card .title.done { text-decoration: line-through; color: #999; }
    .badge { display:inline-block; padding:0.1rem 0.5rem; border-radius:3px; font-size:0.75rem; font-weight:600; }
    .done-badge    { background:#d4edda; color:#155724; }
    .pending-badge { background:#fff3cd; color:#856404; }
    .actions { display:flex; gap:0.4rem; }
    button { padding: 0.3rem 0.8rem; cursor: pointer; border: none; border-radius: 4px; }
    .btn-primary   { background: #007bff; color: #fff; }
    .btn-danger    { background: #dc3545; color: #fff; }
    .btn-secondary { background: #6c757d; color: #fff; }
    .btn-success   { background: #28a745; color: #fff; }
    input { width:100%; padding:0.4rem; margin-bottom:0.5rem; border:1px solid #ccc; border-radius:4px; box-sizing:border-box; }
    .single-todo { background: #e8f4fd; border: 1px solid #b3d7f5; border-radius: 6px; padding: 1rem; margin-top:0.75rem; }
    .error   { color: red; font-size: 0.8rem; }
    .info    { color: #555; font-style: italic; }
    .token-box { background: #d4edda; border: 1px solid #c3e6cb; border-radius:4px; padding:0.75rem; margin-top:0.5rem; word-break:break-all; }
    .loading { color: #888; font-style: italic; }
  `]
})
export class PostsComponent implements OnInit {
  allTodos: Todo[]          = [];
  selectedTodo: Todo | null = null;
  loadingList               = true;
  loadingSingle             = false;
  loginToken: string | null = null;
  loginError: string | null = null;

  addForm: FormGroup;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.dataService.getTodos().subscribe({
      next: (todos) => { this.allTodos = todos.slice(0, 20); this.loadingList = false; },
      error: () => { this.loadingList = false; }
    });
  }

  loadTodoById(id: number = 5): void {
    this.loadingSingle = true;
    this.selectedTodo  = null;
    this.dataService.getTodoById(id).subscribe({
      next: (todo) => { this.selectedTodo = todo; this.loadingSingle = false; },
      error: () => { this.loadingSingle = false; }
    });
  }

  onAddTodo(): void {
    if (this.addForm.invalid) { this.addForm.markAllAsTouched(); return; }
    const newTodo: Omit<Todo, 'id'> = { userId: 1, title: this.addForm.value.title, completed: false };
    this.dataService.createTodo(newTodo).subscribe({
      next: (created) => {
        this.allTodos = [created, ...this.allTodos];
        this.addForm.reset();
        console.log('[POST] New todo created:', created);
      }
    });
  }

  onDelete(id: number): void {
    this.dataService.deleteTodo(id).subscribe({
      next: () => {
        this.allTodos = this.allTodos.filter(t => t.id !== id);
        console.log(`[DELETE] Todo ${id} deleted`);
      }
    });
  }

  onReqresLogin(): void {
    this.loginToken = null;
    this.loginError = null;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<{ token: string }>('https://reqres.in/api/login',
      { email: 'eve.holt@reqres.in', password: 'cityslicka' }, { headers })
      .subscribe({
        next: (res) => { this.loginToken = res.token; console.log('[BONUS] Token:', res.token); },
        error: (err) => { this.loginError = 'Login failed: ' + err.message; }
      });
  }

  get f() { return this.addForm.controls; }
}
