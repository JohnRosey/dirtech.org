import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.css']
})
export class ProjectsNavbarComponent {
  @Input()
  handlerFilterCategory!: Function; // Renommer en handleFilterCategory
  @Input()
  activeCategory!: string; // Renommer en activeCategory
}
