import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HwreactiveformComponent } from './hwreactiveform/hwreactiveform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';



@NgModule({
  declarations: [AppComponent, ReactiveformComponent, HwreactiveformComponent, RegistrationformComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[], //example for showing nesting service example.
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('Constructor inside AppModule Class');
  }
}
