import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@layouts/school/school.component').then((m) => m.SchoolComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('@layouts/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('@pages/sign-in/sign-in.component').then(
            (m) => m.SignInComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('@pages/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
      },
    ],
  },
];
