import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (!auth.isLogged()) {
    router.navigate(['/sign-in'], { replaceUrl: true });
    return false;
  }
  return true;
};
