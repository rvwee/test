import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../ingredient/ingredient.model';

@Component({
    selector: 'ingredient-entry',
    templateUrl: 'ingredient-entry.component.html'
})
export class IngredientEntryComponent implements OnInit {
    @Input() ingredient: Ingredient;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();
    @Output() ingredientDeleted = new EventEmitter<Ingredient>();
    @Output() cancelled = new EventEmitter();

    private isNewIngredient: boolean;

    constructor() { 
    }

    ngOnInit() { 
        this.isNewIngredient = this.ingredient.description === undefined;
    }

    cancel() {
        this.cancelled.emit();
    }

    finish() {
        this.ingredientAdded.emit(this.ingredient);
        this.ingredient = null;
    }

    delete() {
        this.ingredientDeleted.emit(this.ingredient);
    }
}