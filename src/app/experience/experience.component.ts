import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  portfolioData: any;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.portfolioData = this.dataService.getData();
  }
}
