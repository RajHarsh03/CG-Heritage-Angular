import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { roleGuard } from './auth/role.guard';
import { unsavedChangesGuard } from './profile/unsaved-changes.guard';

export const routes: Routes = [
  // Default redirect
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Task 1 — Login
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },

  // Task 1 — Dashboard (protected by AuthGuard)
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },

  // Task 2 — Profile (protected + CanDeactivate guard)
  {
    path: 'profile',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('./profile/profile.component').then((m) => m.ProfileComponent),
  },

  // Task 3 & 4 — Students (lazy-loaded routes with resolver inside)
  {
    path: 'students',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./students/students.routes').then((m) => m.STUDENTS_ROUTES),
  },

  // Bonus — Admin (role-based guard: admin only)
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard('admin')],
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
  },

  // Bonus — Unauthorized page
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent
      ),
  },

  // Task 5 — 404 Wildcard (MUST be last)
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
