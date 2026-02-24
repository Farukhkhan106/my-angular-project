import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },

  {
    path: 'trainees',
    loadComponent: () =>
      import('./features/trainees/trainees.component').then(
        (m) => m.TraineesComponent,
      ),
  },

  {
    path: 'schedule',
    loadComponent: () =>
      import('./features/schedule/schedule.component').then(
        (m) => m.ScheduleComponent,
      ),
  },
];
