// sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  theme: string = 'light';

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  emailMe() {
    window.open("mailto:code.sumax@gmail.com");
  }
}
