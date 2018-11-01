import {Observable} from 'rxjs';
import {Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'payroll-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payroll';
  @Input('url')
  set url(url: string) {
    console.debug('autha received url', url);
    this.router.navigateByUrl(url);
  }

  constructor(
    private router: Router) {
  }
}
