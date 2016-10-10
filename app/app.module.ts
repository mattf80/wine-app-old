import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { WineListComponent } from '../app/wines/wine-list.component';
import { WineFormComponent } from '../app/wines/wine-form.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, WineListComponent, WineFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
