import { NgModule } from '@angular/core';

import { BaseService }   from './base.service';
import { Settings }   from './settings.service';

@NgModule({
    providers: [
        BaseService, 
        Settings
    ]
})
export class ServicesModule { }
