# Day-16: RxJS — Observables, Operators & Subscriptions

## Overview

This project demonstrates core RxJS concepts through 2 assignments. It covers creating Observables manually and with creation operators, managing Subscriptions, preventing memory leaks with `takeUntil`, and applying RxJS operators to transform and chain data streams. The app uses Angular standalone component architecture with `provideHttpClient()` for HTTP-based operator demos.

---

### Assignment 1: Observable, Observer, Subscription

**Route:** `/assign1` | **Component:** `Assign1Component`

Covers the fundamentals of how RxJS works under the hood.

- `new Observable()` — manually creates an Observable that emits 5 numbers at 400ms intervals then calls `complete()`
- Observer with all three callbacks — `next`, `error`, and `complete`
- Subscription stored in a variable — `unsubscribe()` is called inside the `complete` callback
- `of()` — emits three static string values synchronously
- `from()` — converts an array `[10, 20, 30, 40, 50]` into an Observable
- `interval(500)` — emits a tick every 500ms, stopped via `takeUntil(destroy$)` on component destroy
- **Bonus:** `timer(2000)` — emits once after a 2-second delay and updates the template

**Key Concepts:**
- Observable creation — manual vs creation operators
- Observer pattern — `next`, `error`, `complete`
- Subscription management and `unsubscribe()`
- `takeUntil` with a `Subject` for automatic cleanup on `ngOnDestroy`

---

### Assignment 2: map, filter, tap, switchMap, mergeMap

**Route:** `/assign2` | **Component:** `Assign2Component`

Covers the core RxJS operators used in real Angular applications.

- `map` + `tap` + `filter` — numbers 1–10 are squared with `map`, logged before filtering with `tap`, then only values `> 25` are kept by `filter`
- `switchMap` — a button click emits a random ID via `of()`, then `switchMap` cancels any previous in-flight request and fetches a new post from JSONPlaceholder
- `mergeMap` — `from([1, 2, 3])` fires all three user-post requests concurrently; results arrive as each one completes
- **Bonus:** full chain — `map` → `tap` → `filter` → `switchMap` all in one `pipe()` call

**Key Concepts:**
- `map` for transforming values
- `tap` for side-effects without modifying the stream
- `filter` for conditional value passing
- `switchMap` — cancels previous, uses latest (ideal for search/click)
- `mergeMap` — runs all concurrently, keeps all results
- `takeUntil(destroy$)` on all HTTP subscriptions

---

## Route Table

| Path | Component | Notes |
|---|---|---|
| `/` | — | Redirects to `/assign1` |
| `/assign1` | `Assign1Component` | Observable, Observer, Subscription |
| `/assign2` | `Assign2Component` | map, filter, tap, switchMap, mergeMap |

---

## Project Structure

```
src/app/
├── app.ts                      # Root standalone component (navbar + router-outlet)
├── app.html                    # Root template
├── app.css                     # Global navbar styles
├── app.config.ts               # provideRouter + provideHttpClient
├── app.routes.ts               # Route definitions
├── assign1.component.ts        # Assignment 1 — Observable fundamentals
├── assign1.component.html      # Assignment 1 template
├── assign2.component.ts        # Assignment 2 — Core operators
└── assign2.component.html      # Assignment 2 template
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

- [RxJS Documentation](https://rxjs.dev)
- [Angular HTTP Client](https://angular.dev/guide/http)
- [Angular CLI Overview](https://angular.dev/tools/cli)
