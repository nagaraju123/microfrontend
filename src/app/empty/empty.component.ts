import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { LoginComponent } from './../login/login.component';
@Component({
  selector: 'app-empty',
  templateUrl:'./empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {
  routes = [{ path: '/auth', AppName: 'Authentication', name: 'auth' }, { path: '/payroll', AppName: 'Payroll', name: 'payroll' }]
  // @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  // constructor(private resolver: ComponentFactoryResolver) { }

  // ngOnInit() {
  //   alert('-- dashboard component --');
  //   this.createComponent()
  // }


  // createComponent() { 
  //   const factory = this.resolver.resolveComponentFactory(LoginComponent);
  //   const componentRef = this.entry.createComponent(factory);
  // }



}
