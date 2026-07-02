# Day-23: Class, Object & Template Literals — class-demo

## Overview

This is a live session class assignment. It demonstrates three core TypeScript/JavaScript concepts inside an Angular standalone app — creating a `Student` class, instantiating an object, and displaying the details using a template literal.

---

## Assignment

**Task:** Create a `Student` class with properties `id`, `name`, and `course`. Create an object of the class and display the details using a template literal.

**Concepts covered:** Class, Object, Template Literals

---

## What Was Built

- `Student` class defined inside `app.ts` with `id`, `name`, `course` properties and a constructor
- A `student` object created — `new Student(1, 'Harsh Rajput', 'Angular')`
- Template literal built: `` `Student ID: ${id} | Name: ${name} | Course: ${course}` ``
- Both the object properties and the template literal string displayed in the template

---

## Project Structure

```
src/app/
├── app.ts        # Student class + object + template literal
├── app.html      # Displays student properties and template literal output
└── app.css       # Simple card styles
```

---

## Development Server

```bash
ng serve
```

Open `http://localhost:4200/`.

## Building

```bash
ng build
```
