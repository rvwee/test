import { 
    Injectable
} from '@angular/core';
import { 
    Http,
    Response
} from '@angular/http';
import { Observable } from "rxjs/Observable";

import { BaseService } from '../shared/services/base.service';
import { Settings } from '../shared/services/settings.service';

import { Meal } from "./meal.model";

@Injectable()
export class DinerService extends BaseService {
    private testUrl = 'diner'

    constructor(http: Http, private settings: Settings) { 
        super(http);
    }

    getMeals(): Observable<Meal[]> {
        return this.getObjectFromUrl<Meal[]>(this.settings.baseUrl + this.testUrl);
    }

    getMeal(title: string): Observable<Meal> {
        return this.getObjectFromUrl<Meal>(this.settings.baseUrl + this.testUrl + '/' + title);
    }

    postMeal(meal: Meal): Observable<Response> {
        return this.postObject(this.settings.baseUrl + this.testUrl, meal);
    }

    putMeal(title: string, meal: Meal): Observable<Response> {
        return this.putObject(this.settings.baseUrl + this.testUrl + '/' + title, meal);
    }
}