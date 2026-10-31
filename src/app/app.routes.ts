import { Routes } from '@angular/router';
import { Home } from './pages/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Jaqueline Sousa | Continuar Marcas e Patentes' },
  { path: '**', redirectTo: '' },
];
