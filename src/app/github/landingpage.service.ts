import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LandingpageService {

  private username: string;
  private apikey :string = "6b9d6ab43223d0d7fce7cd308c417fb5c79787b2";

  constructor(private http:Http) {
console.log("service is ready");
this.username='Taragon';
 }
 getprofileInfo(){
   return this.http.get("https://api.github.com/users/"+ this.username +"?access_token=" +this.apikey)
    .map(res=>res.json());
 }
 getprofileRepos(){
     return this.http.get("https://api.github.com/users/"+ this.username + "/repos" +"?access_token=" +this.apikey)
      .map(res=>res.json());
   }

 updateprofile(username:string){
   this.username=username;
 }

}
