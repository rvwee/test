import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadSelectedModules } from '../selective-preload-strategy';

import { IntroModule } from '../intro/intro.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path: 'angular-two',
    redirectTo: '/angular-two',
    pathMatch: 'full'
  },
  {
    path: 'dot-net-core',
    redirectTo: '/dot-net-core',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: PreloadSelectedModules }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PreloadSelectedModules
  ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/