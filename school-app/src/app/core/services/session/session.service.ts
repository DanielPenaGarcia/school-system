import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '@core/interfaces/user.interface';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private readonly auth: AuthService, private readonly router: Router, private readonly storage: StorageService) {}

  private subscriteToAuth(): void {
    this.auth.auth.subscribe((event) => {
      switch (event.action) {
        case 'login':
          this.onSignIn(event.user);
          break;
        case 'logout':
          this.onSignOut();
          break;
      }
    });
  }

  private onSignIn(user: User): void {
    this.storage.saveUser(user);
    this.router.navigate(['/']);
  }

  private onSignOut(): void {
    this.router.navigate(['/auth/sign-in']);
  }

  init() {
    this.subscriteToAuth();
  }
}
