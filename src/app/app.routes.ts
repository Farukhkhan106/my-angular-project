import { Routes } from '@angular/router';

<<<<<<< HEAD
export const routes: Routes = [];
=======
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },

  {
    path: 'trainees',
    loadComponent: () =>
      import('./features/trainees/trainees.component')
        .then(m => m.TraineesComponent)
  },

  {
    path: 'schedule',
    loadComponent: () =>
      import('./features/schedule/schedule.component')
        .then(m => m.ScheduleComponent)
  }
];
>>>>>>> 9aa4607eca7340adfabe5f0e1919ee219abc50d2
