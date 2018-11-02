import {
  Injectable, ComponentFactory, ComponentFactoryResolver,
  ViewChildren, Injector, ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from './../config/config';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoadbundlesService {

  constructor(private config: Config, private router: Router,
    private resolver: ComponentFactoryResolver, private injector: Injector) { }
  routeName: any;
  @ViewChildren('dashboard', { read: ViewContainerRef }) dashboard;



  load(name: string): void {
    const configItem = this.config.configJson[name];
    if (configItem == undefined) {
    }
    else {
      console.log(" in config item else   ");
      const content = document.getElementById('content');
      content.innerHTML = "";
      const script = document.createElement('script');
      script.src = configItem.path;
      script.onerror = () => console.error(`error loading ${configItem.path}`);
      content.appendChild(script);
      const htmlElement: HTMLElement = document.createElement(configItem.element);
      content.appendChild(htmlElement);
      this.registerClient(htmlElement);
    }
  }


  private state$ = new Subject();
  private clients: HTMLElement[] = [];

  public registerClient(client: HTMLElement) {
    this.clients.push(client);
  }

  public setState(state: string) {
    this.setAttr('state', state);
  }

  public setUrl(url: string) {
    this.setAttr('url', url);
  }

  private setAttr(attrName: string, attrValue: string) {
    for (const client of this.clients) {
      client.setAttribute(attrName, attrValue);
    }
  }

  setRouteName(route) {
    this.routeName = route;
  }
  getRoute() {
    return this.routeName;
  }

}
