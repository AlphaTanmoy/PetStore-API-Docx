import { Routes } from '@angular/router';
import { ApiDocumentationComponent } from './api-documentation/api-documentation.component';

export const routes: Routes = [
  { path: 'api-docs', component: ApiDocumentationComponent },
  { path: '', redirectTo: '/api-docs', pathMatch: 'full' }
];
