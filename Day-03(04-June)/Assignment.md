# Assignment — Day 03

**Topic: Angular Components & Signals**

---

## Task: Build a Profile Card Component

Create a custom component named `profile-card` that displays a user's name and follower count, with a button to follow the user.

---

## Requirements

- Create a `ProfileCardComponent` with the selector `app-profile-card`
- Use Angular **signals** to manage state — no plain variables
- `name` signal — stores the user's name (e.g. `'Harsh'`)
- `followers` signal — stores the follower count (initial value: `1000`)
- `followUser()` method — increments the follower count by 1 using signal's `update()` method
- Template must display:
  - The user's name in an `<h2>`
  - The follower count in a `<p>`
  - A **Follow** button that calls `followUser()` on click
- Signal values must be accessed using function syntax — `name()` and `followers()`
- Use the `ProfileCardComponent` inside `AppComponent` — pass it through `imports[]`

**Bonus:** Add a second signal `isFollowing` (boolean) that toggles between `Follow` and `Following` on the button label
