import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpService } from '../http.service';

import { ContactMeComponent } from './contact-me.component';

describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMeComponent ],
      providers: [ HttpService],
      imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
  
  it('should have a feedback message', () => {
    expect(component.sendMailFeedback).toContain('Thank you for your message'); 
  });

  it('should contain a form', ()=>{
    expect(de.query(By.css('form'))).toBeTruthy();
  });

  it('should contain name, email and message fields', ()=>{
    expect(de.query(By.css('.nameField'))).toBeTruthy();
    expect(de.query(By.css('.emailField'))).toBeTruthy();
    expect(de.query(By.css('.messageField'))).toBeTruthy();
  });

  
});
