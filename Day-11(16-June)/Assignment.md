# 📝 ASSIGNMENT

> **Week 3 · Day 11 · Angular Router & SPA Navigation**

---

# 📝 Assignment — Build a Multi-Page SPA with Angular Router

## Objective

Build a multi-page Single Page Application (SPA) using Angular Router with navigation, dynamic route parameters, query params, programmatic navigation, and child routes.

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


