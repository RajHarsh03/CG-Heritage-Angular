# Day-10: Angular Services & Dependency Injection — services-app

## Overview

This project demonstrates Angular Services and Dependency Injection through 2 assignments. It covers creating injectable services with `@Injectable({ providedIn: 'root' })`, sharing state between components using `BehaviorSubject`, and building in-memory CRUD with filtering and statistics. The app uses Angular standalone component architecture.

---

## Assignment 1: StudentService with Filtering & Statistics

**Route:** `/students` | **Component:** `SearchComponent` | **Service:** `StudentService`

`StudentService` manages an in-memory array of 6 students and exposes both an Observable stream and utility methods.

- `students$` — `BehaviorSubject`-backed Observable; `SearchComponent` subscribes reactively
- `searchStudents(query)` — filters by name or email, case-insensitive
- `getStudentsByCourse(course)` — returns students enrolled in a specific course
- `getGradeStats()` — returns `{ A: 3, B: 2, C: 1 }` count per grade
- `SearchComponent` has a live search input wired via `debounceTime` + `distinctUntilChanged`
- Course filter buttons show unique courses extracted from the student list
- Grade stats displayed at the bottom as a summary

**Key Concepts:**
- `BehaviorSubject` for reactive state in a service
- Exposing `.asObservable()` to prevent external `.next()` calls
- `searchStudents`, `getStudentsByCourse`, `getGradeStats` as pure utility methods
- `takeUntil(destroy$)` for subscription cleanup

---

## Assignment 2: CartService — Cross-Component Data Sharing

**Route:** `/cart` | **Components:** `ProductListComponent`, `CartSummaryComponent` | **Service:** `CartService`

Two sibling components share state via `CartService` singleton — no `@Input`/`@Output` between them.

- `CartService` — `BehaviorSubject<Product[]>` powers `cartItems$` Observable
- `addToCart(product)` — adds if not already in cart (prevents duplicates)
- `removeFromCart(id)` — removes by product id
- `clearCart()` — empties the cart
- `getCartTotal()` — sums all item prices
- `ProductListComponent` — displays 6 hardcoded products with "Add to Cart" button each
- `CartSummaryComponent` — subscribes to `cartItems$` and shows live count, items, and total
- Adding a product in `ProductListComponent` instantly reflects in `CartSummaryComponent`

**Key Concepts:**
- Angular DI singleton — one `CartService` instance shared across sibling components
- `BehaviorSubject` + `.asObservable()` for reactive cart state
- `takeUntil(destroy$)` for cleanup on component destroy
- `CartPageComponent` as a layout wrapper — no business logic

---

## Route Table

| Path | Component | Notes |
|---|---|---|
| `/` | — | Redirects to `/students` |
| `/students` | `SearchComponent` | Assignment 1 — student search + grade stats |
| `/cart` | `CartPageComponent` | Assignment 2 — products + cart side by side |

---

## Project Structure

```
src/app/
├── app.ts                                      # Root standalone component
├── app.html                                    # Navbar + router-outlet
├── app.css                                     # Global styles
├── app.config.ts                               # provideRouter
├── app.routes.ts                               # Route definitions
├── models/
│   └── student.model.ts                        # Student and Product interfaces
├── services/
│   ├── student.service.ts                      # CRUD + search + stats + BehaviorSubject
│   └── cart.service.ts                         # Cart CRUD + BehaviorSubject
├── components/
│   ├── search/                                 # Assignment 1 — search + filter + stats
│   ├── product-list/                           # Assignment 2 — product list with add buttons
│   └── cart-summary/                           # Assignment 2 — live cart via cartItems$
└── pages/
    └── cart-page/                              # Layout wrapper for products + cart
```

---

## Development Server

```bash
ng serve
```

Open `http://localhost:4200/`. The app reloads automatically on file changes.

## Building

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Additional Resources

- [Angular Services & DI](https://angular.dev/guide/di)
- [RxJS BehaviorSubject](https://rxjs.dev/api/index/class/BehaviorSubject)
- [Angular CLI Overview](https://angular.dev/tools/cli)
