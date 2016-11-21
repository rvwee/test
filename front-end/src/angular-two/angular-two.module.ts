import { NgModule } from '@angular/core';

import { AngularTwoComponent }   from './angular-two.component';

import { AngularTwoRoutingModule } from './angular-two-routing.module';

import { TestModule } from '../test/test.module';

@NgModule({
    imports: [ 
        TestModule,
        AngularTwoRoutingModule
     ],
    declarations: [ AngularTwoComponent ],
})
export class AngularTwoModule { }