import { Routes } from '@angular/router';
import { Q2Component } from './q2.component';
import { Q3Component } from './q3.component';
import { Q4Component } from './q4.component';
import { Q5Component } from './q5.component';

export const routes: Routes = [
  { path: '', redirectTo: 'q2', pathMatch: 'full' },
  { path: 'q2', component: Q2Component },
  { path: 'q3', component: Q3Component },
  { path: 'q4', component: Q4Component },
  { path: 'q5', component: Q5Component },
];
