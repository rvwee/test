import { NgModule } from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';

import { IngredientsComponent }   from './ingredients.component';

import { IngredientModule } from './ingredient.module';

@NgModule({
    imports: [
        BrowserModule, 
        IngredientModule
    ],
    exports: [IngredientsComponent],
    declarations: [IngredientsComponent],
    providers: [],
})
export class IngredientsModule { }
