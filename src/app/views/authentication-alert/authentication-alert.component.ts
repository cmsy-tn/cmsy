import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'cmsy-authentication-alert',
  templateUrl: './authentication-alert.component.html',
  styleUrls: ['./authentication-alert.component.scss']
})
export class AuthenticationAlertComponent {
  constructor(public auth0: AuthService) { }
}
