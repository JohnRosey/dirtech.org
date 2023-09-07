import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark', this.darkTheme);
  }
}
