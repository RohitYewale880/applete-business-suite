import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactForm') contactForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  contactObj = {
    name: '',
    email: '',
    phone: '',
    comment: ''
  };

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactObj);

      // API call here

      this.contactForm.resetForm();
    }
  }
}
