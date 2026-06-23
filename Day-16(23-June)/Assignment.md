# Assignment — Day 16

**Topic: RxJS — Observables, Operators & Subscriptions**

> Complete each assignment to build confidence with RxJS. Try solving it on your own first before referring to the notes!

---

## Assignment 1: RxJS Fundamentals — Observable, Observer, Subscription

- Create an `Observable` using `new Observable()` that emits 5 numbers then completes
- Write an Observer with all three callbacks: `next`, `error`, and `complete`
- Subscribe to the Observable and store the subscription in a variable
- Call `subscription.unsubscribe()` and verify no more values are received
- Create Observables using `of()`, `from()`, and `interval()` — log their outputs

**Bonus:** Use `timer(2000)` to emit a value after 2 seconds and show it in the template

---

## Assignment 2: Core Operators — `map`, `filter`, `tap`, `switchMap`, `mergeMap`

- Create an Observable of numbers 1–10, use `map` to square each number
- Use `filter` to keep only numbers greater than 25 from the previous result
- Add `tap` between `map` and `filter` to log the value before filtering
- Build a button that on click uses `switchMap` to fetch a post from JSONPlaceholder
- Fetch details for user IDs `[1, 2, 3]` using `mergeMap` — log each result as it arrives

**Bonus:** Chain `map` + `filter` + `tap` + `switchMap` together in one `pipe()` call
