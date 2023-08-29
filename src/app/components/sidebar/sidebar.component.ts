import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmsy-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes: any[] = [
    { label: 'dashboard', link: 'dashboard', icon: `home` },
    { label: 'faq', link: 'faq', icon: 'question-circle' },
    { label: 'services', link: 'services', icon: 'heat-map' },
    { label: 'settings', link: 'settings', icon: 'control' }
  ];

  constructor(private router: Router) { }

  navigateToRoute(link: string) {
    this.router.navigate([link]);
  }
}
