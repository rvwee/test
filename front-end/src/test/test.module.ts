import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { TestComponent }   from './test.component';
import { TestService }   from './test.service';

@NgModule({
    imports: [ BrowserModule ],
    exports: [ TestComponent ],
    declarations: [ TestComponent ],
    providers: [ TestService ],
})
export class TestModule { }