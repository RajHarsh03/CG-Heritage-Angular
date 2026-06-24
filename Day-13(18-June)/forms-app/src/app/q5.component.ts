import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

// ── Custom Validator: minimum age of 16 ──────────────────────────────────────
export function minAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null; // let required handle empty value

    const today = new Date();
    const birthDate = new Date(control.value);

    // Calculate age in full years
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age < minAge ? { minAge: { required: minAge, actual: age } } : null;
  };
}
// ─────────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-q5',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './q5.component.html',
})
export class Q5Component {
  studentForm: FormGroup;

  genderOptions = ['Male', 'Female', 'Prefer not to say'];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      // ── Fields from the original Student Registration Form ──────────────
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],

      // ── New fields added in Q5 ──────────────────────────────────────────
      // (a) Date of Birth — required + must be at least 16 years old
      dateOfBirth: ['', [Validators.required, minAgeValidator(16)]],

      // (b) Gender dropdown — required
      gender: ['', Validators.required],
    });
  }

  get f() {
    return this.studentForm.controls;
  }

  onSubmit(): void {
    this.studentForm.markAllAsTouched();

    if (this.studentForm.valid) {
      console.log('Student Registration Submitted:', this.studentForm.value);
    } else {
      console.warn('Form has errors. Please fix them before submitting.');
    }
  }
}
