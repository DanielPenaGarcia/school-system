import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { primeNgConfig } from '@core/configurations';
import { provideHttpClient } from '@angular/common/http';
import { StorageService } from '@core/services/storage/storage.service';
import { AuthService } from '@core/services/auth/auth.service';
import { SessionService } from '@core/services/session/session.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG(primeNgConfig),
    provideHttpClient(),
    provideAppInitializer(() => {
      const session = inject(SessionService);
      session.init();
    }),
    StorageService,
    AuthService,
  ],
};
