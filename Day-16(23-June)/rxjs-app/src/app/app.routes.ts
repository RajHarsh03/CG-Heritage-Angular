import { Routes } from '@angular/router';
import { Assign1Component } from './assign1.component';
import { Assign2Component } from './assign2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'assign1', pathMatch: 'full' },
  { path: 'assign1', component: Assign1Component },
  { path: 'assign2', component: Assign2Component },
];
