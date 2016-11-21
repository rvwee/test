import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DotNetCoreComponent } from './dot-net-core.component';

const dotNetCoreRoutes: Routes = [
  {
    path: 'dot-net-core',
    component: DotNetCoreComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dotNetCoreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DotNetCoreRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/