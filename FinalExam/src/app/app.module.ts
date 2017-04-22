import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { HttpModule }   from '@angular/http'

import { AppComponent }  from './app.component';
import { DisComponent }  from './components/distance.component';

import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, DisComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
