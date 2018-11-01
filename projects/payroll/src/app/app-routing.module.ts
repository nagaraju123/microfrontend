import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
  
import { PayrollComponent } from './payroll/payroll.component';
const routes: Routes = [{ path: 'payroll', component: PayrollComponent },
{ path: '**', component: EmptyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
