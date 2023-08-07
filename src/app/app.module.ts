import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SettingsComponent } from './views/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-blucf6ji.us.auth0.com',
      clientId: 'jxL7pDleEaChsAUn9uzGoi3QaYTFviNm',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
