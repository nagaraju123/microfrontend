import { Component, OnDestroy, OnInit,ViewChildren,ViewContainerRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadbundlesService } from './services/loadbundles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  routes = ['auth', 'payroll'];
  routeName: any = "/";
  // routes1 = [{ path: '/auth', AppName: 'Authentication', name: 'auth' }, { path: '/payroll', AppName: 'Payroll', name: 'payroll' }]

  constructor(private router: Router, private loadService: LoadbundlesService) {
  }



  ngOnInit(){
   
    this.subscription = this.router.events.subscribe((event) => {
      console.log(event,'-- ng Onint -- ',this.router);
      if (event instanceof NavigationStart) {
        alert('-- if condition  -- '+event.url);
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
}
