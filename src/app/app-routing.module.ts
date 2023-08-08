import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// CUSTOM IMPORTS
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '/', pathMatch: "full", component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
