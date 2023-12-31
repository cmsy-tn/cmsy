import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// CUSTOM IMPORTS
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'faq', loadChildren: () => import("src/app/modules/faq/faq.module").then((module) => module.FaqModule) },
  { path: 'services', loadChildren: () => import("src/app/modules/services/services.module").then((module) => module.ServicesModule) },
  { path: 'blog', loadChildren: () => import("src/app/modules/blog/blog.module").then((module) => module.BlogModule) },
  { path: 'settings', loadChildren: () => import("src/app/modules/settings/settings.module").then((module) => module.SettingsModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
