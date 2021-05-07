import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  ngOnInit(): void {
  }
  
  constructor(private httpService: HttpService){}

  onSubmit(contactForm: NgForm) {
    if (true) {
      const email = contactForm.value;
      this.httpService.postRequest('https://formspree.io/f/mpzkqedj',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': { 'Content-Type': 'application/json' } }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

}
