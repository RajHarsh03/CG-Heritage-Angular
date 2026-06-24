# Assignment — Day 10

**Topic: Angular Services & Dependency Injection**

---

## Assignment 1: Extend the StudentService with Filtering & Statistics

- Add a method `searchStudents(query: string): Student[]` that filters students by name or email (case-insensitive)
- Add a method `getStudentsByCourse(course: string): Student[]` that returns only students enrolled in a specific course
- Add a method `getGradeStats(): { [grade: string]: number }` that returns a count of students per grade (e.g. `{ A: 5, B: 3, C: 2 }`)
- Create a `SearchComponent` that injects the `StudentService`, binds a search input to `searchStudents()`, and displays filtered results reactively using `BehaviorSubject`
- Ensure the original `students$` Observable in the service continues to work correctly alongside the new methods

---

## Assignment 2: Multi-Component Data Sharing with a CartService

- Create a `Product` interface with fields: `id`, `name`, `price`, and `category`
- Generate a `CartService` (`ng g s cart`) and implement: `addToCart(product)`, `removeFromCart(id)`, `clearCart()`, `getCartTotal()`, and a `cartItems$` Observable powered by `BehaviorSubject`
- Build a `ProductListComponent` that displays a hardcoded list of at least 5 products with an "Add to Cart" button on each
- Build a `CartSummaryComponent` (sibling component) that subscribes to `cartItems$` and displays current items and total price in real time — no `@Input`/`@Output` between the two components
- Ensure both components share the same `CartService` singleton so adding a product in `ProductListComponent` immediately reflects in `CartSummaryComponent`
- Add a "Clear Cart" button in `CartSummaryComponent` that calls `clearCart()` and verify it updates both components
