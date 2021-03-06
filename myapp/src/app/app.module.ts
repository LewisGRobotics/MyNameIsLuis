import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { SoftwareComponent } from './software/software.component';
import { HomeComponent } from './home/home.component';
import { QAndAComponent } from './q-and-a/q-and-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    ExperienceComponent,
    SoftwareComponent,
    HomeComponent,
    QAndAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule , 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
