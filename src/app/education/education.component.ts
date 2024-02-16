import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  portfolioData: any;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.portfolioData = this.dataService.getData();
  }
}
