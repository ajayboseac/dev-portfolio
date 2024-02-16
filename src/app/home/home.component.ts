import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  portfolioData:any;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.portfolioData = this.dataService.getData();
  }
}
