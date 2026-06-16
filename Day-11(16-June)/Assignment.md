# 📝 Day 11 Assignment — Build a Multi-Page SPA with Angular Router

## Objective

Build a multi-page Single Page Application (SPA) using Angular Router with navigation, dynamic route parameters, query params, programmatic navigation, and child routes.

---

## Topics Covered

### Topic 1 — RouterModule & Routes Array

Angular Router maps URLs to components — like a GPS for your app. A SPA loads one HTML file and swaps components without reloading the page.

**Setup:**
```bash
ng new my-app   # Answer YES when asked about routing
```

**`app-routing.module.ts`:**
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

| Property | Meaning |
|----------|---------|
| `path: 'home'` | When URL is `/home`, show this component |
| `component: HomeComponent` | Which component to display |
| `path: ''` | Empty URL — the default page |
| `redirectTo: 'home'` | Automatically go to `/home` |
| `path: '**'` | Catch-all — any unknown URL |

> Add `<router-outlet></router-outlet>` in `app.component.html` — the placeholder where Angular renders each component.

---

### Topic 2 — RouterLink & RouterLinkActive

`routerLink` navigates without reloading the page. `routerLinkActive` adds a CSS class when the link matches the current URL.

```html
<nav>
  <a routerLink="/home"     routerLinkActive="active-link">Home</a>
  <a routerLink="/about"    routerLinkActive="active-link">About</a>
  <a routerLink="/students" routerLinkActive="active-link">Students</a>
</nav>
```

```css
.active-link {
  color: blue;
  font-weight: bold;
  border-bottom: 2px solid blue;
}
```

For exact matching (so `/home` doesn't also match `/`):
```html
<a routerLink="/home"
   routerLinkActive="active-link"
   [routerLinkActiveOptions]="{ exact: true }">Home</a>
```

---

### Topic 3 — ActivatedRoute: Reading URL Params & Query Strings

`ActivatedRoute` is a service that reads data from the current URL.

| Type | URL Example | Used For |
|------|-------------|----------|
| Route Param | `/students/5` | Show details of student #5 |
| Query String | `/students?search=John` | Search / filter students |

**Reading a route param** (route: `{ path: 'students/:id', component: StudentDetailComponent }`):
```typescript
import { ActivatedRoute } from '@angular/router';

export class StudentDetailComponent {
  studentId: string = '';

  constructor(private route: ActivatedRoute) {
    this.studentId = this.route.snapshot.paramMap.get('id') ?? '';
  }
}
```

**Reading query params** (URL: `/students?search=John&page=2`):
```typescript
constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    console.log(params['search']); // 'John'
    console.log(params['page']);   // '2'
  });
}
```

---

### Topic 4 — Programmatic Navigation: Router.navigate()

Use `Router.navigate()` when you need to navigate after an action in code (form submit, login, delete).

```typescript
import { Router } from '@angular/router';

export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/home']);
  }
}
```

**With route params:**
```typescript
// Go to /students/42
this.router.navigate(['/students', 42]);
```

**With query params:**
```typescript
// Go to /students?search=John
this.router.navigate(['/students'], { queryParams: { search: 'John' } });
```

**Relative navigation:**
```typescript
this.router.navigate(['../list'], { relativeTo: this.route });
```

---

### Topic 5 — Nested / Child Routes with `<router-outlet>`

Child routes render a component inside another component's layout. The parent stays the same; only the inner content changes.

**Route definition:**
```typescript
const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,       // Parent layout
    children: [
      { path: '',    component: StudentListComponent },    // /students
      { path: 'add', component: StudentAddComponent },    // /students/add
      { path: ':id', component: StudentDetailComponent }  // /students/5
    ]
  }
];
```

**`students.component.html` (parent template):**
```html
<div class="students-page">
  <h2>Students Section</h2>
  <nav>
    <a routerLink=""    routerLinkActive="active">List</a>
    <a routerLink="add" routerLinkActive="active">Add New</a>
  </nav>
  <router-outlet></router-outlet>
</div>
```

| URL | Parent Shows | Child Shows |
|-----|-------------|-------------|
| `/students` | StudentsComponent | StudentListComponent |
| `/students/add` | StudentsComponent | StudentAddComponent |
| `/students/5` | StudentsComponent | StudentDetailComponent |

---

## Tasks

1. Create an Angular project with routing enabled:
   ```bash
   ng new student-app --routing
   ```

2. Create three components:
   - `HomeComponent`
   - `AboutComponent`
   - `StudentsComponent`

3. Set up routes in `app-routing.module.ts`:

   | Path | Component |
   |------|-----------|
   | `/` | HomeComponent |
   | `/about` | AboutComponent |
   | `/students` | StudentsComponent |

4. Add a navigation bar in `app.component.html` using `routerLink` for all three pages.

5. Apply `routerLinkActive="active"` to highlight the current page link with a CSS class.

6. Create a `StudentDetailComponent` and add a child route:
   ```
   /students/:id
   ```

7. On the Students page, display a list of 5 students and make each name a clickable `routerLink` pointing to `/students/:id`.

8. In `StudentDetailComponent`, use `ActivatedRoute` to read the `:id` from the URL and display:
   ```
   Viewing Student ID: X
   ```

9. Add a **Go Back** button in `StudentDetailComponent` that uses `Router.navigate(['/students'])` to return to the list.

---

## 🎯 Bonus

Add a search box on the Students page. When submitted:
- Navigate to `/students?search=NAME`
- Display the search value below the input using a `queryParams` subscription

---

## ✅ Submission Checklist

- [ ] App runs with `ng serve` without errors
- [ ] All three pages load correctly using the navigation bar
- [ ] The active link is visually highlighted
- [ ] Clicking a student name navigates to `/students/:id`
- [ ] The ID from the URL is displayed in `StudentDetailComponent`
- [ ] The Go Back button navigates back to the students list
- [ ] *(Bonus)* Search query param appears in the URL and is read/displayed

---

> **Remember:** The most important file is `app-routing.module.ts`. Get that right first, and everything else falls into place!
>
> Good luck, and happy coding! 🚀  
> *Corporates Guide — Your guide to success*
