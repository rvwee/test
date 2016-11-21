import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro.component';

const introRoutes: Routes = [
  {
    path: 'intro',
    component: IntroComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(introRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IntroRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/