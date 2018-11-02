import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  @Input() message: string;
  ngOnInit() {  
    console.log("in login component"+this.message);
  }

  login(){
    this.router.navigate(['home']);
  }
}
