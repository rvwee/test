import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import { Ingredient } from '../ingredient/ingredient.model';

import { DinerService } from '../diner.service';
import { Meal } from '../meal.model';

@Component({
    selector: 'meal-entry',
    templateUrl: 'meal-entry.component.html'
})
export class MealEntryComponent implements OnInit {
    @Input() title: string;
    @Output() onFinished = new EventEmitter<Meal>();
    
    private addingIngredient = false;
    private changingIngredientIndex = -1;
    private ingredient: Ingredient;

    private meal: Meal = new Meal();

    constructor(private dinerService: DinerService) {
        if (!this.meal.ingredients) this.meal.ingredients = [];
    }

    ngOnInit() { 
        if (this.title !== undefined) {
            this.dinerService.getMeal(this.title)
                .subscribe(data => {
                this.meal = data
                console.log(JSON.stringify(data))
            });
        }
    }

    add() {
        this.addingIngredient = true;
        this.ingredient = new Ingredient();
    }

    ingredientSelected(index: number) {
        this.changingIngredientIndex = index;
        this.ingredient = JSON.parse(JSON.stringify(this.meal.ingredients[index]));
    }

    added(ingredient: Ingredient) {
        if (!this.meal.ingredients) this.meal.ingredients = [];
        if (this.addingIngredient)
            this.meal.ingredients.push(ingredient);
        else 
            this.meal.ingredients[this.changingIngredientIndex] = ingredient;
        
        this.changingIngredientIndex = -1;
        this.addingIngredient = false;
        this.ingredient = null;
    }

    deleteIngredient(ingredient: Ingredient) {
        this.meal.ingredients = this.meal.ingredients.filter(i => i.description !== ingredient.description);
        this.ingredient = null;
    }

    cancelIngredient() {
        this.ingredient = null;
    }

    cancel() {
        this.onFinished.emit(null);
    }

    get(): string {
        return JSON.stringify(this.meal.ingredients);
    }

    onSubmit() {
        if (this.title === undefined) {
            this.dinerService.postMeal(this.meal)
                .subscribe(
                    data => { 
                        console.log(JSON.stringify(data));
                        this.onFinished.emit(this.meal);
                    },
                    error => {
                        alert(error._body);
                        this.onFinished.emit(null);
                    }
                );
        }
        else {
            this.dinerService.putMeal(this.title, this.meal)
                .subscribe(
                    data => { 
                        console.log(JSON.stringify(data));
                        this.onFinished.emit(this.meal);
                    },
                    error => {
                        alert(error._body);
                        this.onFinished.emit(null);
                    }
                );
        }
    }
}