import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpComponent } from './exp/exp.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AbtDetailComponent } from './abt-detail/abt-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    AboutComponent,
    ContactComponent,
    AbtDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
