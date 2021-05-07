import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { QAndAComponent } from './q-and-a/q-and-a.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'software', component: SoftwareComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'q-and-a', component: QAndAComponent},
  {path:'contactme', component: ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
