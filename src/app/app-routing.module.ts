import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {

    path: 'home', component: MaincomponentComponent
  },
{
  path:'login',component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
