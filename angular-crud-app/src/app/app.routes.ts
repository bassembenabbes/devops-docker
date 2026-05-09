import { Routes } from '@angular/router';
import { UserManagerComponent } from './components/user-manager/user-manager';

export const routes: Routes = [
  { path: '', component: UserManagerComponent }, // This makes it the main page
  { path: '**', redirectTo: '' } // Redirects any unknown paths to the main page
];

