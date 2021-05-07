import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'contactme', component: ContactMeComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'software', component: SoftwareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
