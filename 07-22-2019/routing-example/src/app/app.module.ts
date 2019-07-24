import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const postfixTitle = "Page";
let routes : Routes = [{
  path: 'about', component: AboutComponent, data: {
    title: "About " + postfixTitle
  }
}, {
  path: 'contact', component: ContactComponent
},{
  path: "**", component: NotFoundComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
