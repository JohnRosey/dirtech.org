// bar.component.ts
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{
  @Input() value: any;
  barWidth: string = '';

  ngOnInit() {
    this.barWidth = `${this.value.level}%`;
  }
}
