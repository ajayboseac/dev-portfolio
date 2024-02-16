import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface MailItem {
  enquirerName:string,
  message: string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  mailItem : MailItem = {
    enquirerName: '',
    message: ''
  };
  subject = 'Enquiry';
  // enquirerName!: string;
  // message = ''
  mailTo = "anjuvijayan1122@gmail.com";
  mailText:string = "";

  onSubmit() {
    this.mailText = `mailto:${this.mailTo}?subject=${this.subject}&body=Name: ${this.mailItem.enquirerName}%0D%0Aquery: ${this.mailItem.message}`; 
    window.location.href = this.mailText;
  }
}
