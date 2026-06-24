import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-q2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './q2.component.html',
})
export class Q2Component {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      yearsOfExperience: [
        null,
        [Validators.required, Validators.min(0), Validators.max(40)],
      ],
      jobRole: ['', Validators.required],
    });
  }

  // Convenience getter for cleaner template access
  get f() {
    return this.jobForm.controls;
  }

  onSubmit(): void {
    this.jobForm.markAllAsTouched();

    if (this.jobForm.valid) {
      console.log('Job Application Submitted:', this.jobForm.value);
    } else {
      console.warn('Form is invalid. Please fix the errors.');
    }
  }
}
