import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [{
  path: 'auth', component: AuthenticationComponent
}
  , { path: '**', component: EmptyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
