import { Ingredient } from "./ingredient/ingredient.model";

export class Meal {
    title: string;
    chef: string;
    extraInfo: string;
    ingredients: Ingredient[];
}