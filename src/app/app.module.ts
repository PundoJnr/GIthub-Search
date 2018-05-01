import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/common/http';
import { LandingpageService} from './github/landingpage.service'


import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule
  ],
  providers: [LandingpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
