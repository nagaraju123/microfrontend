import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { LoginComponent } from './../login/login.component';

import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadbundlesService } from '../services/loadbundles.service';

@Component({
  selector: 'app-empty',
  templateUrl:'./empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {
  subscription: Subscription;
  routeName:any='/'
  routes = [{ path: '/auth', AppName: 'Authentication', name: 'auth' }, { path: '/payroll', AppName: 'Payroll', name: 'payroll' }]
  // @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  // constructor(private resolver: ComponentFactoryResolver) { }
  constructor(private loadService: LoadbundlesService,
    private resolver: ComponentFactoryResolver,
    private router: Router) { }

  ngOnInit() {
 this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeName = event.url;
        for (let i of this.routes) {
          if (event.url == '/' + i) {
            this.routeName = i;
            break;
          }
        }
        if (event.url.indexOf(this.routeName) > 0) {
          this.loadService.load(this.routeName);
          this.loadService.setUrl(event.url);
        } else if (event.url.indexOf(this.routeName) == 0) { 
          this.loadService.load(this.routeName);
        }

      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  // ngOnDestroy(){
  //   alert('-- on destroy --');
  //   this.entry.clear();
  // }


  // createComponent() { 
  //   const factory = this.resolver.resolveComponentFactory(LoginComponent);
  //   const componentRef = this.entry.createComponent(factory);
  // }



}
