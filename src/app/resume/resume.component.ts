import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})


export class ResumeComponent {
  currentSlide = 0;
  categories = [
    // ... vos catégories ici
  ];
  
  languages = this.dataService.getSkills();
  tools = this.dataService.getServices();
  projects = this.dataService.getProjects();
  previousCategory() {
    // Logique pour afficher la catégorie précédente
  }

  nextCategory() {
    // Logique pour afficher la catégorie suivante
  }
  constructor(private dataService: DataService) {}




}
