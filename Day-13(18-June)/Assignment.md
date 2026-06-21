# Assignment

**Week 3 – Day 13 | Angular Forms**

---

## Instructions

- Answer all 5 questions in detail
- For coding questions, write proper TypeScript and HTML code
- You may refer to the notes, but try writing the code yourself first
- Submission format: your `.ts` and `.html` files zipped

---

## Questions

### Q1

What is the difference between Template-Driven Forms and Reactive Forms? Give two real-world examples of when you would choose each approach.

---

### Q2

Create a Reactive Form for a **Job Application** with these fields:

| Field | Validation |
|---|---|
| Full Name | Required, min 3 characters |
| Email | Required, valid email |
| Years of Experience | Required, min 0, max 40 |
| Job Role | Required |

Show all validation error messages in the HTML.

---

### Q3

Write a custom validator called `noProfanityValidator` that checks if a text field contains the word `'badword'`. If it does, the validator should return an error `{ hasProfanity: true }`. Show how to attach this validator to a `FormControl`.

---

### Q4

Explain what `markAllAsTouched()` does and why it is important in form submission. Write the complete `onSubmit()` method that:

- (a) checks form validity
- (b) logs the data if valid
- (c) shows all errors if invalid

---

### Q5

Extend the Student Registration Form built in class to add:

- (a) A **Date of Birth** field that validates the student is at least 16 years old using a custom validator
- (b) A **Gender** dropdown with options: `Male`, `Female`, and `Prefer not to say`

Both fields must be required.
