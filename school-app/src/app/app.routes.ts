import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-up',
        // Replace to redirect to the home page
    },
    {
        path: '',
        loadComponent: () => import('@layouts/auth/auth.component').then(m => m.AuthComponent),
        children: [
            {
                path: 'sign-up',
                loadComponent: () => import('@pages/sign-up/sign-up.component').then(m => m.SignUpComponent)
            }
        ]
    }
];
