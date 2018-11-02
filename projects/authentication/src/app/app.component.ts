import {Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'auth-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authentication';

  @Input('url')
  set url(url: string) {
    console.debug('autha received url', url);
    this.router.navigateByUrl(url);
  }

  constructor(
    private router: Router) {
  }

  ngOnInit(){
    console.log('-- Authentication for ngOninit')
  }

}
