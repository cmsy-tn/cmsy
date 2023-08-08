import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmsy-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes: any[] = [
    { label: 'home', link: 'dashboard', icon: 'aaaa' },
    { label: 'faq', link: 'faq', icon: 'aaaa' },
    { label: 'settings', link: 'settings', icon: 'aaaa' }
  ];

  constructor(private router: Router) { }

  navigateToRoute(link: string) {
    this.router.navigate([link]);
  }
}
