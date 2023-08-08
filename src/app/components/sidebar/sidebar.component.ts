import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmsy-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes: any[] = [
    { label: 'dashboard', link: 'dashboard', icon: `house` },
    { label: 'faq', link: 'faq', icon: 'question-circle' },
    { label: 'settings', link: 'settings', icon: 'gear' }
  ];

  constructor(private router: Router) { }

  navigateToRoute(link: string) {
    this.router.navigate([link]);
  }
}
