import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { StorageService } from '@core/services/storage/storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(StorageService).getUser()?.['access_token'];
  const newReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  })
  return next(newReq);
};
