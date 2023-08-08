import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// CUSTOM IMPORTS
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'faq', component: DashboardComponent },
  { path: 'settings', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
