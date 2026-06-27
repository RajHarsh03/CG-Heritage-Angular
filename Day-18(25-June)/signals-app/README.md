# Day-18: State Management Architecture — signals-app

## Overview

This project demonstrates Angular state management through 2 assignments. Part A covers Angular Signals (`v17+`) using `signal()`, `computed()`, and `effect()` to build a counter. Part B covers shared state with `BehaviorSubject` to build a shopping cart where two sibling components communicate via a service — no `@Input`/`@Output` between them. The app uses Angular standalone component architecture.

---

## Part A: Counter App with Signals

**Route:** `/counter` | **Component:** `CounterComponent`

A counter built entirely with Angular Signals — no RxJS, no subscriptions.

- `count` — `signal(0)` — the core state value
- `double` — `computed(() => count() * 2)` — auto-updates when `count` changes
- `square` — `computed(() => count() * count())` — auto-updates when `count` changes
- `effect()` in constructor — logs `count` to the console on every change
- **+1** / **-1** / **Reset** / **+5** buttons — update via `update()` and `set()`
- Guard — `-1` button is disabled when count is 0, `decrement()` has an `if > 0` check

**Key Concepts:**
- `signal()` — creates a reactive state variable
- `computed()` — derives values that update automatically
- `effect()` — runs side effects when signals change
- `count.update(v => v + 1)` vs `count.set(0)` — relative vs absolute updates

---

## Part B: Shopping Cart with BehaviorSubject

**Route:** `/cart` | **Components:** `ProductListComponent`, `CartComponent` | **Service:** `CartService`

Two sibling components share live cart state via `CartService` — no `@Input`/`@Output`.

- `CartService` — `BehaviorSubject<CartItem[]>` powers `cart$` Observable
- `addItem()` — adds product or increments `qty` if already in cart
- `removeItem(id)` — removes by product id
- `clearCart()` — empties the cart
- `getTotal()` — sums `price × qty` for all items
- `ProductListComponent` — 5 hardcoded products with "Add to Cart" buttons
- `CartComponent` — subscribes to `cart$`, shows items with qty, price, total, Remove and Clear Cart buttons
- `CartPageComponent` — layout wrapper placing products and cart side by side

**Key Concepts:**
- `BehaviorSubject` + `.asObservable()` for read-only stream
- Angular DI singleton — same `CartService` instance shared across siblings
- `takeUntil(destroy$)` for subscription cleanup on destroy

---

## Route Table

| Path | Component | Notes |
|---|---|---|
| `/` | — | Redirects to `/counter` |
| `/counter` | `CounterComponent` | Part A — Signals |
| `/cart` | `CartPageComponent` | Part B — BehaviorSubject cart |

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
│   └── cart-item.model.ts                      # CartItem and Product interfaces
├── services/
│   └── cart.service.ts                         # BehaviorSubject + CRUD methods
├── components/
│   ├── counter/                                # Part A — signal, computed, effect
│   ├── product-list/                           # Part B — products with add buttons
│   └── cart/                                   # Part B — live cart via cart$
└── pages/
    └── cart-page/                              # Layout wrapper for Part B
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

- [Angular Signals](https://angular.dev/guide/signals)
- [RxJS BehaviorSubject](https://rxjs.dev/api/index/class/BehaviorSubject)
- [Angular CLI Overview](https://angular.dev/tools/cli)
