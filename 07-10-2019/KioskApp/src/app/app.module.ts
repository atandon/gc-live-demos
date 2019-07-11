import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { ItemsListComponent } from './app-container/items-list/items-list.component';
import { ItemComponent } from './app-container/items-list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
