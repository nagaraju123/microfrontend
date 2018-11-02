// -- This is My App Routing Module

import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './login/login.component';



export const mainRoutes: Routes = [
 {
   path:'',redirectTo:'login',pathMatch:'full'
 },
 {
  //  path:'',children:[
  //    {
       path:'login',component:LoginComponent
  //    }
  //  ]
 },
 {
   path:'**',component:MaincomponentComponent,
   children:[{
     path:'home',component:MaincomponentComponent
   }]
 }
];

// const childRoutes:Routes=[
 
//   {
//     path:'home',component:MaincomponentComponent
//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router:Router){
 
  }
 }
