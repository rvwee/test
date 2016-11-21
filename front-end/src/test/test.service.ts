import { Injectable } from '@angular/core';
import { 
    Http,
    Response
} from '@angular/http';
import { Observable } from "rxjs/Observable";

import { BaseService } from '../shared/services/base.service';
import { Settings } from '../shared/services/settings.service';

import { ITest } from "./test.model";

@Injectable()
export class TestService extends BaseService {
    private testUrl = 'test'

    constructor(http: Http, private settings: Settings) { 
        super(http);
    }

    getTest(): Observable<ITest> {
        return this.getObjectFromUrl<ITest>(this.settings.baseUrl + this.testUrl);
    }
}