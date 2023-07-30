import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// *** CUSTOM IMPORTS *** \\
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: HomeComponent },
  { path: '@me', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
