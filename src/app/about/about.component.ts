import { Component, OnInit } from '@angular/core';
import { DataService, Service } from '../data.service';
 // Supposant que vous ayez un service pour récupérer les données

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  services: Service[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.services = this.dataService.getServices();
  }
}
