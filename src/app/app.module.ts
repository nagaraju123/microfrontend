import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { Config } from './config/config';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    EmptyComponent,
    LoginComponent
  ],
  imports: [
     BrowserModule,
    AppRoutingModule
  ],
  entryComponents:[
    LoginComponent
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
