import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProfessionalsList } from './features/professionals/professionals-list/professionals-list';
import { ProfessionalDetail } from './features/professionals/professional-detail/professional-detail';
import { Appointments } from './features/appointments/appointments';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'professionals', component: ProfessionalsList },
  { path: 'professionals/:id', component: ProfessionalDetail },
  { path: 'appointments', component: Appointments },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '' }
];
