import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { TestService } from './test.service';
import { ITest } from './test.model';

@Component({
    selector: 'test',
    templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {
    private data: Observable<ITest>;

    constructor(private testService: TestService) { 
    }

    ngOnInit() { 
        this.data = this.getTest();
    }

    getTest(): Observable<ITest> {
        return this.testService.getTest();
    }
}