import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DinerComponent } from './diner.component';

const dinerRoutes: Routes = [
  {
    path: 'diner',
    component: DinerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dinerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DinerRoutingModule { }
