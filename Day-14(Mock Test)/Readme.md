# Day-14: Mock Evaluation & Learning Summary

## Overview

**Day-14** is dedicated to **mock evaluation** — a comprehensive assessment of all learning and practices covered during Days 10 to 13 of the Angular Corporate Guide Training Program.

---

## Learning & Practice Summary (Days 10–13)

### Day-10: Angular Services & Dependency Injection

**Key Topics Covered:**
- What services are and why they exist
- Creating services with `@Injectable({ providedIn: 'root' })`
- Angular's Dependency Injection (DI) system
- Injecting services into components and other services
- Separating business logic from component logic
- Service scope: root, module-level, and component-level providers

**Practical Skills:**
- Generating services with `ng generate service`
- Moving data and logic out of components into services
- Sharing state between components via a shared service
- Using `HttpClient` inside a service to fetch data

---

### Day-11: Angular Router & SPA Navigation

**Key Topics Covered:**
- What a Single Page Application (SPA) is and how Angular Router enables it
- Setting up `RouterModule` and defining the `Routes` array
- Route properties: `path`, `component`, `redirectTo`, `pathMatch`, and wildcard `**`
- `routerLink` for navigation without page reload
- `routerLinkActive` for highlighting the active navigation link
- `[routerLinkActiveOptions]="{ exact: true }"` for exact URL matching
- `ActivatedRoute` for reading route params (`:id`) and query strings (`?search=`)
- `snapshot.paramMap.get()` vs `queryParams.subscribe()` approaches
- Programmatic navigation using `Router.navigate()`
- Navigating with route params, query params, and relative routes
- Nested/child routes using the `children` array
- Using `<router-outlet>` in both root and parent components

**Practical Skills:**
- Creating a multi-page SPA with Home, About, and Students pages
- Building a navbar with `routerLink` and `routerLinkActive`
- Reading `:id` from the URL and displaying it in `StudentDetailComponent`
- Adding a "Go Back" button using `Router.navigate(['/students'])`
- Bonus: passing a search query via `queryParams` and reading it with a subscription

---

### Day-12: Angular Routing — Security & Performance

**Key Topics Covered:**
- `CanActivate` route guard for protecting routes from unauthenticated access
- Creating an `AuthService` with `isLoggedIn()`, `login()`, and `logout()` methods
- Redirecting users to `/login` when access is denied inside a guard
- `CanDeactivate` guard for preventing navigation away from unsaved forms
- Implementing a `CanComponentDeactivate` interface on form components
- Lazy loading feature modules using the `loadChildren` syntax
- Difference between eager loading (default) and lazy loading (optimised)
- The rule: never import a lazy-loaded module in `AppModule`'s imports array
- Route Resolvers — pre-fetching data before a component loads
- Reading resolved data from `route.snapshot.data` instead of calling APIs in `ngOnInit()`
- Wildcard route (`path: '**'`) for 404 page handling
- The rule: wildcard route must always be the last route in the array

**Practical Skills:**
- Building a secure app with `AuthGuard` protecting the `/dashboard` route
- Creating a `CanDeactivate` guard that shows a confirmation dialog on dirty forms
- Setting up a lazy-loaded `StudentsModule` with its own routing module
- Verifying lazy loading in the browser Network tab (separate chunk file)
- Creating a `StudentResolver` and attaching it to `/students/:id`
- Building a `NotFoundComponent` with a "Go to Home" button as the 404 page
- Bonus: Role-based guard with `admin` and `student` roles, `/unauthorized` redirect

---

### Day-13: Angular Forms — Template-Driven & Reactive

**Key Topics Covered:**
- Template-Driven Forms — form logic in HTML using `ngForm`, `ngModel`, `FormsModule`
- Form state properties: `touched`, `dirty`, `invalid`, `valid`
- Reactive Forms — form logic in TypeScript using `FormGroup`, `FormControl`, `FormBuilder`
- `ReactiveFormsModule` setup and `[formGroup]` / `formControlName` bindings
- Built-in validators: `required`, `minLength`, `maxLength`, `email`, `min`, `max`, `pattern`
- Applying multiple validators to a single field using an array
- Custom validators — functions returning `null` (valid) or an error object (invalid)
- Cross-field validators applied at the `FormGroup` level (e.g. password match)
- `markAllAsTouched()` — forces all fields to show errors on submit
- Shortcut getter `get f()` for cleaner error checking in templates
- Template-Driven vs Reactive Forms — when to use each approach

**Practical Skills:**
- Building a Student Registration Form with Full Name, Email, Phone, Age, Course, Password, and Confirm Password
- Writing a `noSpacesValidator` custom validator function
- Writing a `passwordMatchValidator` group-level validator
- Displaying field-level and group-level error messages in HTML
- Handling form submission — validating, logging data, and resetting the form
- Bonus: `noProfanityValidator`, `minAgeValidator(16)`, and Gender dropdown with `Omit` / `Partial` utility types

---

**Status**: Mock Evaluation Phase  
**Training Program**: Corporate Guide Angular Training & Internship  
**Trainer**: Corporate Guide Team
