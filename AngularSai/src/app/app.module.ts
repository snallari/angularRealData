import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http}from '@angular/http'
import { AppComponent } from './app.component';
import { routing } from './app.routig';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import { AboutComponent } from './components/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
