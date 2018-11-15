import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http' ;

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//to declare the possible routes in application
const routes: Routes = [];

//decorators
@NgModule({
  imports: [
    BrowserModule,
    NgModule,
    //httpModule method to declare the possible http in application
    HttpModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

//empty object
export class AppRoutingModule { }
