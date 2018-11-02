
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadbundlesService } from '../services/loadbundles.service';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory, OnInit,OnDestroy
} from '@angular/core';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit{
  subscription: Subscription;
  routeName:any='/'
  @ViewChild('dashboard', { read: ViewContainerRef }) entry: ViewContainerRef;


  routes = [{ path: '/auth', AppName: 'Authentication', name: 'auth' }, { path: '/payroll', AppName: 'Payroll', name: 'payroll' }]
  constructor(private loadService: LoadbundlesService,
     private resolver: ComponentFactoryResolver,
     private router: Router) { }

  ngOnInit() {
    alert(this.routes);
    //     alert('-- main component --')
    // this.subscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.routeName = event.url;
    //     for (let i of this.routes) {
    //       if (event.url == '/' + i) {
    //         this.routeName = i;
    //         break;
    //       }
    //     }
    //     if (event.url.indexOf(this.routeName) > 0) {
    //       this.loadService.load(this.routeName);
    //       this.loadService.setUrl(event.url);
    //     } else if (event.url.indexOf(this.routeName) == 0) { 
    //       this.loadService.load(this.routeName);
    //     }

    //   }
    // });
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  ngOnDestroy(){
    console.log('-- on destroy --');
    // this.entry.clear();
  }
 

}
