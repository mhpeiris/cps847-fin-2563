import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DisComponent} from './components/distance.component';

const appRoutes: Routes = [
  {
    path: 'distance',
    component: DisComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);