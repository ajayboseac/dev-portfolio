import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  portfolioData: any;
  constructor(private dataService: DataService){}
  ngOnInit() {
    this.portfolioData = this.dataService.getData();
  }
}
