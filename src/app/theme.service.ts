import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  //private theme = new BehaviorSubject<string>('light');
  //currentTheme = this.theme.asObservable();
  private _theme: string = 'light';

  get theme() {
    return this._theme;
  }
  //changeTheme(theme: string) {
  //  this.theme.next(theme);
 // }
  toggleTheme() {
    this._theme = this._theme === 'light' ? 'dark' : 'light';
  }
}
