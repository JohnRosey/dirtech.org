import {DataService} from "../data";
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})


export class ResumeComponent {
  languages = this.dataService.languages;
  tools = this.dataService.services;
  constructor(private dataService: DataService) {}




}
