import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserRole } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  selectedRole: UserRole = 'student';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    if (!this.username.trim() || !this.password.trim()) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    // Simple demo: any non-empty credentials work
    this.auth.login(this.selectedRole);
    this.router.navigate(['/dashboard']);
  }
}
