import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from './ingredient.model';

@Component({
    selector: '[ingredient]',
    templateUrl: 'ingredient.component.html'
})
export class IngredientComponent implements OnInit {
    @Input() ingredient: Ingredient;
    @Input() index: number;

    constructor() { }

    ngOnInit() { 
    }

    getIngredient(): string {
        let result = this.index+1 + ": " + this.ingredient.description;
        if (this.ingredient.extraInfo)
            result += " - " + this.ingredient.extraInfo;

        return result;
    }
}