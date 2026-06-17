# 🛠️ Practical Implementation (1.5 Hours)

## Goal: Auth Guard + Lazy Loaded Student Module + 404 Page

In this hands-on session, you will combine everything learned today to build a secure, performance-optimized Angular application.

---

## Project Structure

```
src/app/
  ├── auth/
  │   ├── auth.service.ts          (handles login state)
  │   ├── auth.guard.ts            (CanActivate guard)
  │   └── login/login.component.ts
  ├── students/                    (Lazy Loaded Module)
  │   ├── students.module.ts
  │   ├── students-routing.module.ts
  │   ├── student-list/
  │   └── student-detail/
  ├── not-found/                   (404 page)
  │   └── not-found.component.ts
  └── app-routing.module.ts        (main routing config)
```

---

## Step-by-Step Implementation

### Step 1 — Create Auth Service

```ts
// auth/auth.service.ts
@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;

  login() { this.loggedIn = true; }
  logout() { this.loggedIn = false; }
  isLoggedIn(): boolean { return this.loggedIn; }
}
```

### Step 2 — Create Auth Guard

```ts
// auth/auth.guard.ts
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
```

### Step 3 — Create Students Module (Lazy Loaded)

```
ng generate module students --routing
ng generate component students/student-list
ng generate component students/student-detail
```

### Step 4 — Set Up Main App Routing

```ts
// app-routing.module.ts
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'students',
    canActivate: [AuthGuard],          // 🔐 Protected!
    loadChildren: () =>
      import('./students/students.module')
        .then(m => m.StudentsModule)   // ⚡ Lazy Loaded!
  },
  { path: '**', component: NotFoundComponent }  // 🔍 Wildcard
];
```

### Step 5 — Students Module Routing

```ts
// students/students-routing.module.ts
const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: ':id', component: StudentDetailComponent }
];
```

---

# 📝 Assignment — Day 13

## Security & Performance Routing

### Assignment Overview

Build a small Angular application that demonstrates all five concepts covered today. This should take approximately 1.5 to 2 hours to complete.

---

### Task 1 — Auth Guard Implementation 🔐

Create an AuthService and AuthGuard:

5. Create a simple login page with a username and password field
6. Create an AuthService with isLoggedIn(), login(), and logout() methods
7. Create an AuthGuard using CanActivate
8. Protect the /dashboard route using this guard
9. Redirect to /login if the user is not logged in
10. Add a 'Login' button that calls auth.login() and then navigates to /dashboard

---

### Task 2 — CanDeactivate Guard 🚪

Add unsaved-form protection:

11. Create a form page at /profile with at least 3 input fields
12. Track when the form is dirty (data has been typed but not saved)
13. Add a CanDeactivate guard that shows a confirmation dialog when the user tries to leave with unsaved changes
14. Test it: type in the form, then try to navigate away — the dialog should appear

---

### Task 3 — Lazy Loaded Student Module ⚡

Set up a students feature module with lazy loading:

15. Generate a StudentsModule with its own routing module
16. Create StudentListComponent — show a list of 5 hardcoded students
17. Create StudentDetailComponent — show details when a student is clicked
18. Use loadChildren to lazy-load this module in the main app routing
19. Verify in the browser Network tab that the students chunk only loads when /students is visited

---

### Task 4 — Route Resolver 📦

Add a resolver for the Student Detail page:

20. Create a StudentService with a getStudent(id) method (return mock data)
21. Create a StudentResolver that uses this service
22. Attach the resolver to the /students/:id route
23. In StudentDetailComponent, read data from route.snapshot.data instead of calling the API yourself

---

### Task 5 — Wildcard Route (404 Page) 🔍

Create a professional 404 page:

24. Generate a NotFoundComponent
25. Add a proper 404 message, a simple illustration or emoji, and a 'Go to Home' button
26. Add the wildcard route { path: '**', ... } as the LAST route
27. Test it by typing a random URL like /abcxyz in the browser

---

## Bonus Challenge 🌟 (Optional)

### 🌟 Bonus Task — Role-Based Guard

Extend the AuthGuard to check for user roles. Create two roles: 'admin' and 'student'. The /admin route should only be accessible to users with the 'admin' role. If a 'student' role user tries to access /admin, redirect them to an /unauthorized page with a message.
