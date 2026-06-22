import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product, User, Todo, NewTodo, PartialUser } from '../../models/models';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styles: [`
    .container   { max-width: 900px; margin: 0 auto; padding: 1rem; }
    h2  { color: #333; }
    h3  { color: #555; margin-top: 2rem; border-bottom: 1px solid #eee; padding-bottom: 0.4rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; margin-top: 0.75rem; }
    .product-card { background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 1rem; }
    .product-card h4 { margin: 0 0 0.3rem; }
    .price  { color: #28a745; font-weight: bold; font-size: 1.1rem; }
    .desc   { color: #888; font-size: 0.85rem; margin-top: 0.3rem; }
    .user-card { background:#f0f4ff; border:1px solid #c5d5f5; border-radius:6px; padding:0.6rem 1rem; margin-bottom:0.5rem; }
    .user-card strong { display: block; }
    .user-card span   { font-size: 0.85rem; color: #666; }
    .todo-item { padding:0.4rem 0.75rem; margin-bottom:0.3rem; border-radius:4px; font-size:0.88rem; display:flex; gap:0.5rem; }
    .todo-done    { background:#d4edda; color:#155724; }
    .todo-pending { background:#fff3cd; color:#856404; }
    pre  { background: #eee; padding: 0.75rem; border-radius: 4px; font-size: 0.8rem; overflow-x: auto; }
    .info-box { background:#d1ecf1; border:1px solid #bee5eb; color:#0c5460; border-radius:6px; padding:0.75rem 1rem; margin-bottom:1rem; }
    .loading  { color: #888; font-style: italic; }
    button { padding:0.4rem 1rem; background:#007bff; color:#fff; border:none; border-radius:4px; cursor:pointer; margin-right:0.5rem; }
    .btn-secondary { background: #6c757d; }
  `]
})
export class ProductsComponent implements OnInit {
  products: Product[]     = [];
  users: User[]           = [];
  todos: Todo[]           = [];
  singleTodo: Todo | null = null;

  newTodoExample: NewTodo   = { userId: 1, title: 'Type-safe new todo', completed: false };
  patchExample: PartialUser = { name: 'Updated Name', email: 'new@email.com' };
  createdTodo: Todo | null  = null;
  patchedUser: User | null  = null;

  loadingProducts = true;
  loadingUsers    = true;
  loadingTodos    = true;
  loadingSingle   = false;
  loadingPatch    = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(p => {
      this.products = p;
      this.loadingProducts = false;
      console.log('[A5] Products:', p);
    });

    this.productService.getUsers().subscribe({
      next: (u) => { this.users = u; this.loadingUsers = false; console.log('[A5] Users:', u); },
      error: () => { this.loadingUsers = false; }
    });

    this.productService.getTodos().subscribe({
      next: (t) => { this.todos = t.slice(0, 10); this.loadingTodos = false; console.log('[A5] Todos:', t); },
      error: () => { this.loadingTodos = false; }
    });

    this.productService.createTodo(this.newTodoExample).subscribe({
      next: (todo) => { this.createdTodo = todo; console.log('[A5 Bonus] Created todo:', todo); }
    });
  }

  loadSingleTodo(id: number = 7): void {
    this.loadingSingle = true;
    this.singleTodo    = null;
    this.productService.getTodo(id).subscribe({
      next: (t) => { this.singleTodo = t; this.loadingSingle = false; console.log('[A5] Single todo:', t); },
      error: () => { this.loadingSingle = false; }
    });
  }

  patchUser(): void {
    this.loadingPatch = true;
    this.productService.patchUser(1, this.patchExample).subscribe({
      next: (u) => { this.patchedUser = u; this.loadingPatch = false; console.log('[A5 Bonus] Patched user:', u); },
      error: () => { this.loadingPatch = false; }
    });
  }
}
