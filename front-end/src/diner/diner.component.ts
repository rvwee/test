import { 
    Component, 
    OnInit 
} from '@angular/core';
import { Observable } from "rxjs/Observable";

import { DinerService } from "./diner.service";

import { Meal } from "./meal.model";

@Component({
    selector: 'diner',
    templateUrl: 'diner.component.html'
})
export class DinerComponent implements OnInit {
    private meals: Meal[];
    private mealEntryVisible: boolean;
    private currentMealTitle: string;

    constructor(private service: DinerService) { }

    ngOnInit() { 
        this.service.getMeals().subscribe(
            data => this.meals = data
        )
    }

    newOrEditMeal(title: string) {
        this.currentMealTitle = title;
        this.mealEntryVisible = true;
    }
    
    getMealCount(): string {
        const mealCount = this.meals ? this.meals.length : 0;
        return '(' + mealCount + ')';
    }

    finished(meal: Meal) {
        this.mealEntryVisible = false;
        if (meal) {
            if (this.currentMealTitle) {
                const index = this.meals.indexOf(this.meals.find(m => m.title === this.currentMealTitle));
                this.meals[index] = meal;
            } else {
                this.meals.push(meal);
            }
        }
        this.currentMealTitle = undefined;
    }
}