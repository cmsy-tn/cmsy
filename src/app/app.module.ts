import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AuthenticationAlertComponent } from './views/authentication-alert/authentication-alert.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationAlertComponent,
    NotFoundComponent,
    LoaderComponent,
    DashboardComponent,
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
