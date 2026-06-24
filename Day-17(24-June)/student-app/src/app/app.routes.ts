import { Routes } from '@angular/router';
import { Posts } from './components/posts/posts';
import { ErrorLog } from './components/error-log/error-log';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: Posts },
  { path: 'error-log', component: ErrorLog },
];
