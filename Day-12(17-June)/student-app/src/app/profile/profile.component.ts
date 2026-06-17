import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements CanComponentDeactivate {
  // Original saved values
  private savedData = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 555-000-1234',
  };

  // Form model
  fullName = this.savedData.fullName;
  email = this.savedData.email;
  phone = this.savedData.phone;

  isDirty = false;
  isSaved = false;

  onFieldChange(): void {
    this.isDirty =
      this.fullName !== this.savedData.fullName ||
      this.email !== this.savedData.email ||
      this.phone !== this.savedData.phone;
    this.isSaved = false;
  }

  save(): void {
    this.savedData = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
    };
    this.isDirty = false;
    this.isSaved = true;
  }

  reset(): void {
    this.fullName = this.savedData.fullName;
    this.email = this.savedData.email;
    this.phone = this.savedData.phone;
    this.isDirty = false;
    this.isSaved = false;
  }

  // Required by CanDeactivate guard
  canDeactivate(): boolean {
    if (this.isDirty) {
      return window.confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
    }
    return true;
  }
}
