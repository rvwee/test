import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { ServicesModule } from '../shared/services/services.module';
import { IntroModule } from '../intro/intro.module';
import { AngularTwoModule } from '../angular-two/angular-two.module';
import { DotNetCoreModule } from '../dot-net-core/dot-net-core.module';
import { DinerModule } from "../diner/diner.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    AngularTwoModule,
    DotNetCoreModule,
    ServicesModule,
    IntroModule,
    DinerModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
