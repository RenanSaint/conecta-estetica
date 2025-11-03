import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProfessionalsList } from './features/professionals/professionals-list/professionals-list';
import { ProfessionalDetail } from './features/professionals/professional-detail/professional-detail';
import { Appointments } from './features/appointments/appointments';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { ResourcesList } from './features/resources/resources-list/resources-list';
import { ResourceDetail } from './features/resources/resource-detail/resource-detail';

export const routes: Routes = [
  { path: '', component: Home, data: { label: 'Início', icon: 'home' } },
  { path: 'professionals', component: ProfessionalsList, data: { label: 'Profissionais', icon: 'group_search' } },
  { path: 'professionals/:id', component: ProfessionalDetail },
  { path: 'appointments', component: Appointments, data: { label: 'Agendamentos', icon: 'event_list' } },
  { path: 'resources', component: ResourcesList, data: { label: 'Serviços', icon: 'business_center' } },
  { path: 'resources/:id', component: ResourceDetail },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '' }
];
