import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '../app/features/components/first-screen/first-screen.component'
      ).then((c) => c.FirstScreenComponent),
  },
  {
    path: 'secondScreen',
    loadComponent: () =>
      import(
        '../app/features/components/second-screen/second-screen.component'
      ).then((c) => c.SecondScreenComponent),
  },
  {
    path: 'thirdScreen',
    loadComponent: () =>
      import(
        '../app/features/components/third-screen/third-screen.component'
      ).then((c) => c.ThirdScreenComponent),
  },
];
