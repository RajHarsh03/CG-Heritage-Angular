import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'admin' | 'student' | null;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;
  private role: UserRole = null;

  constructor(private router: Router) {}

  login(role: UserRole = 'student'): void {
    this.loggedIn = true;
    this.role = role;
  }

  logout(): void {
    this.loggedIn = false;
    this.role = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): UserRole {
    return this.role;
  }

  hasRole(role: UserRole): boolean {
    return this.role === role;
  }
}
