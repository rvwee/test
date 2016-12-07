import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { DinerComponent } from './diner.component';
import { DinerRoutingModule } from './diner-routing.module';
import { DinerService } from "./diner.service";

import { IngredientsModule } from './ingredient/ingredients.module';
import { MealEntryModule } from './entry/entry.module';

@NgModule({
    imports: [
        BrowserModule,
        IngredientsModule,
        DinerRoutingModule,
        MealEntryModule
    ],
    declarations: [
        DinerComponent 
    ],
    providers: [
        DinerService    
    ]
})
export class DinerModule { }