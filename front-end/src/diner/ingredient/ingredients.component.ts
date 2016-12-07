import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ingredient } from './ingredient.model';

@Component({
    selector: 'ingredients',
    templateUrl: 'ingredients.component.html'
})
export class IngredientsComponent implements OnInit {
    @Input() ingredients: Ingredient[];
    @Output() ingredientSelected = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { 
    }

    onIngredientPressed(index: number) {
        this.ingredientSelected.emit(index);
    }
}