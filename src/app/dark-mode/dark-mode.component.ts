import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DarkModeService} from "angular-dark-mode";

@Component({
  selector: 'app-dark-mode',
  template: `<input
    type="checkbox"
    [checked]="darkMode$ | async"
    (change)="onToggle()"
  />`,
})
export class DarkModeComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
