import { inject } from '@angular/core';
import { SessionService } from '../services/session/session.service';

export function initializeApp() {
  const sessionService = inject(SessionService);
  return () => {
    return new Promise<void>((resolve) => {
      sessionService.init();
      resolve(); // Marca la inicialización como completada
    });
  };
}
