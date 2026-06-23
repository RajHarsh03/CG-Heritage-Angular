import { Routes } from '@angular/router';
import { A1TestComponent } from './components/a1-test/a1-test';
import { PostsComponent } from './components/posts/posts';
import { UsersComponent } from './components/users/users';
import { ErrorDemoComponent } from './components/error-demo/error-demo';
import { ProductsComponent } from './components/products/products';

export const routes: Routes = [
  { path: '',          redirectTo: 'a1-test', pathMatch: 'full' },
  { path: 'a1-test',   component: A1TestComponent },
  { path: 'posts',     component: PostsComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'errors',    component: ErrorDemoComponent },
  { path: 'products',  component: ProductsComponent },
  { path: '**',        redirectTo: 'a1-test' },
];
