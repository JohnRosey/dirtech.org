import {Component, OnInit} from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  activeCategory: string = 'All';
  projects: any[] = []; // Initialisez la liste des projets

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Chargez les projets initiaux lorsque le composant est initialisé
    this.loadProjects();
    console.log(this.projects);
  }

  loadProjects() {
    this.projects = this.dataService.getProjectsByCategory(this.activeCategory);
  }

  // Méthode pour gérer le changement de catégorie
  handleFilterCategory(category: string): void {
    this.activeCategory = category;
    this.loadProjects(); // Rechargez les projets en fonction de la nouvelle catégorie
  }
}
