import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { MealEntryComponent }   from './meal-entry.component';
import { IngredientEntryComponent }   from './ingredient-entry.component';

import { IngredientsModule } from '../ingredient/ingredients.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        IngredientsModule
    ],
    exports: [
        MealEntryComponent
    ],
    declarations: [
        MealEntryComponent,
        IngredientEntryComponent
    ],
    providers: [],
})
export class MealEntryModule { }
