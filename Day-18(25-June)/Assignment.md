# Assignment — Day 18

**Topic: State Management Architecture**

> Try building each part from scratch before referring to the notes!

---

## Part A: Counter App with Signals

- Create a standalone `CounterComponent`
- Use `signal()` to create a `count` state starting at `0`
- Use `computed()` to derive `double` (count × 2) and `square` (count²)
- Add four buttons: **Increment (+1)**, **Decrement (−1)**, **Reset**, **Add 5**
- Use `effect()` to log to the console every time `count` changes
- Guard against negative values — count must never go below `0`

**Expected output:** Count: 3 | Double: 6 | Square: 9 — with all 4 buttons working and console logs on every change

---

## Part B: Shopping Cart with BehaviorSubject

- Create a `CartService` with `BehaviorSubject<CartItem[]>` — expose it as `cart$`
- Implement: `addItem()`, `removeItem()`, `clearCart()`, `getTotal()`
- Build a `ProductListComponent` showing at least 3 hardcoded products with "Add to Cart" buttons
- Build a `CartComponent` that subscribes to `cart$` and displays items and running total
- Add a **Remove** button per cart item
- Add a **Clear Cart** button that empties the entire cart

**Expected output:** Product list with add buttons. Cart shows items, individual prices, and total. Remove and Clear Cart work in real time.

---
