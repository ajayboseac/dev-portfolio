import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';


export const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'experience', component: ExperienceComponent },
{ path: 'education', component: EducationComponent },
{ path: 'resume', component: ResumeComponent },
{ path: 'contact', component: ContactComponent }
];
