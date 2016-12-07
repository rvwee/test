import { NgModule } from '@angular/core';

import { DotNetCoreComponent }   from './dot-net-core.component';

import { DotNetCoreRoutingModule } from './dot-net-core-routing.module';

import { TestModule } from '../test/test.module';

@NgModule({
    imports: [ 
        TestModule,
        DotNetCoreRoutingModule
     ],
     declarations: [ DotNetCoreComponent ]
})
export class DotNetCoreModule { }