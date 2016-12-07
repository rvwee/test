import { NgModule } from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';

import { IngredientComponent }   from './ingredient.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [
        IngredientComponent
    ],
    declarations: [
        IngredientComponent
    ]
})
export class IngredientModule { }
