import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Students } from './students/students';
import { StudentDetail } from './student-detail/student-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'students',
    component: Students,
    children: [
      { path: ':id', component: StudentDetail }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
