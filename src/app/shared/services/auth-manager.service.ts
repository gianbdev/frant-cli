import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthManager {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  checkAuthentication() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
}
