import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LibreDeudaComponent } from './libreDeuda/libreDeuda.component';
import { ContainerComponent } from './containers/containers.component';

import { AuthGuard, authProviders } from './authGuard';

const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'libre-deuda', component: LibreDeudaComponent, canActivate: [AuthGuard], children: [
    { path: ''},
    { path: 'new-container', component: ContainerComponent }
  ] },
  { path: 'login', component: LoginComponent }
];

export const appRouterProviders = [
  provideRouter(routes),
  authProviders
];
