import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

// ── Custom Validator ──────────────────────────────────────────────────────────
// Returns { hasProfanity: true } if the field value contains 'badword',
// otherwise returns null (meaning valid).
export function noProfanityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = (control.value ?? '').toLowerCase();
    return value.includes('badword') ? { hasProfanity: true } : null;
  };
}
// ─────────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-q3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './q3.component.html',
})
export class Q3Component {
  commentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      // Attach noProfanityValidator to the 'comment' FormControl
      comment: ['', [noProfanityValidator()]],
    });
  }

  get comment() {
    return this.commentForm.get('comment');
  }

  onSubmit(): void {
    this.commentForm.markAllAsTouched();
    if (this.commentForm.valid) {
      console.log('Comment submitted:', this.commentForm.value);
    }
  }
}
