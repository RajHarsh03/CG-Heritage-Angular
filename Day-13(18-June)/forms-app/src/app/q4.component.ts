import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

/*
  Q4 – markAllAsTouched() explanation
  ─────────────────────────────────────────────────────────────────────────────
  Angular only shows validation error messages for controls that have been
  "touched" (i.e. the user has interacted with them). When the user clicks
  Submit without touching any field, no errors are visible.

  Calling `this.form.markAllAsTouched()` programmatically marks every control
  in the form group as touched, which triggers the *ngIf conditions that reveal
  error messages — giving the user a full picture of what needs to be fixed
  before they can submit.

  It is essential in the onSubmit() handler so that:
    1. Invalid forms show ALL errors at once instead of just the ones the user
       happened to visit.
    2. Valid forms can proceed to process/log the data.
  ─────────────────────────────────────────────────────────────────────────────
*/

@Component({
  selector: 'app-q4',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './q4.component.html',
})
export class Q4Component {
  loginForm: FormGroup;
  submissionStatus: 'idle' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  // ── Complete onSubmit() ──────────────────────────────────────────────────
  onSubmit(): void {
    // Step 1: Mark all controls as touched so validation errors become visible
    this.loginForm.markAllAsTouched();

    // Step 2 (a): Check form validity
    if (this.loginForm.valid) {
      // Step 2 (b): Form is valid — log the data
      console.log('Form submitted successfully:', this.loginForm.value);
      this.submissionStatus = 'success';
    } else {
      // Step 2 (c): Form is invalid — log all current errors
      console.warn('Form submission failed. Errors:');

      Object.keys(this.loginForm.controls).forEach((controlName) => {
        const control = this.loginForm.get(controlName);
        if (control && control.invalid) {
          console.warn(`  ${controlName}:`, control.errors);
        }
      });

      this.submissionStatus = 'error';
    }
  }
  // ─────────────────────────────────────────────────────────────────────────
}
