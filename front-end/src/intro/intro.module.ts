import { NgModule } from '@angular/core';

import { IntroComponent }   from './intro.component';

import { IntroRoutingModule } from './intro-routing.module';

@NgModule({
    imports: [
        IntroRoutingModule
     ],
    declarations: [ IntroComponent ],
})
export class IntroModule { }