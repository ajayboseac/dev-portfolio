import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ HomeComponent, AboutComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  portfolioData: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioData = this.dataService.getData();
  }
  downloadPdf(){
    let link = document.createElement("a");
    link.download=this.portfolioData.resume;
    link.href = `assets/resume/${this.portfolioData.resume}`;
    link.click();
  }
}
