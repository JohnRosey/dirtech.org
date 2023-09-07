import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  active = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.active = 'About';
        } else if (event.url === '/projects') {
          this.active = 'Projects';
        } else if (event.url === '/resume') {
          this.active = 'Resume';
        }
      }
    });
  }

  setActive(name: string) {
    this.active = name;
  }
}
