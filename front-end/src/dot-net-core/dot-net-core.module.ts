import { NgModule } from '@angular/core';

import { DotNetCoreComponent }   from './dot-net-core.component';

import { DotNetCoreRoutingModule } from './dot-net-core-routing.module';

import { TestModule } from '../test/test.module';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

@NgModule({
    imports: [ 
        TestModule,
        DotNetCoreRoutingModule,
        HighlightJsModule
     ],
     providers: [
        HighlightJsService
     ],
     declarations: [ DotNetCoreComponent ]
})
export class DotNetCoreModule { }