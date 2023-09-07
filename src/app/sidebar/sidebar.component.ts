// sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  theme: string = 'light';
  themeService: any;

  //changeTheme() {
   // this.theme = this.theme === 'light' ? 'dark' : 'light';
  //}
  changeTheme() {
    this.themeService.toggleTheme();
  }
  emailMe() {
    window.open("mailto:ismael.gansonre@icloud.com");
  }
}
