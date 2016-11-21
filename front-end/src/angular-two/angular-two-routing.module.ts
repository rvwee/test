import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularTwoComponent } from './angular-two.component';

const angularTwoRoutes: Routes = [
  {
    path: 'angular-two',
    component: AngularTwoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(angularTwoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AngularTwoRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/