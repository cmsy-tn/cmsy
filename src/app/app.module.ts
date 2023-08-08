import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

// CUSTOM IMPORTS
import { AuthenticationAlertComponent } from './views/authentication-alert/authentication-alert.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationAlertComponent,
    NotFoundComponent,
    DashboardComponent,
    LoadingComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
