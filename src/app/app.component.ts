//App-component.ts
import { Component, OnDestroy, OnInit, ViewChildren, ViewContainerRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadbundlesService } from './services/loadbundles.service';
import {mainRoutes} from './app-routing.module';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  routes = ['auth', 'payroll'];
  routeName: any = "/";
  constructor(private router: Router, private loadService: LoadbundlesService) {
  }
  ngOnInit() {
    // this.router.navigate(['login']);
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeName = event.url;
        for (let i of this.routes) {
          if (event.url == '/' + i) {
            console.log(event.url + "inside if condition in app component " + i);
            this.routeName = i;
            break;
          }
        }
        console.log(event.url.indexOf(this.routeName) + ' -- if condition  --  ' + event.url);
        if (event.url.indexOf(this.routeName) > 0) {
          this.loadService.load(this.routeName);
          this.loadService.setUrl(event.url);
          // mainRoutes.push(
          //   {
          //     path:'login',component:LoginComponent
          //   },
          //   {
          //     path:'home',component:MaincomponentComponent
          //   }            
          // )
          this.router.config.push(  {
            path:'login',component:LoginComponent
          },
          {
            path:'home',component:MaincomponentComponent
          }   );
        } else if (event.url.indexOf(this.routeName) == 0) {
          this.loadService.load(this.routeName);
        }

      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
