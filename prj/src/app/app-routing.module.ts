import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent }, //about
  { path: 'exp', component: ExpComponent }, //experience/resume
  { path: 'contact', component: ContactComponent } //contact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
