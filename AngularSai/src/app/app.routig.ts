import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const appRoutes:Routes=[{
  path:'',
  component:UserComponent
},
  {
    path:'about',
    component:AboutComponent
  }

];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
