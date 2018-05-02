import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LandingpageService {

  private username: string;
  private apikey :string = "6b9d6ab43223d0d7fce7cd308c417fb5c79787b2";

  constructor(private http:HttpClient) {
console.log("service is ready");
this.username='Taragon';
 }
 getprofileInfo(){
   return this.http.get("https://api.github.com/users/"+ this.username +"?access_token=" +this.apikey)
    .map(res=>res);
 }
 getprofileRepos(){
     return this.http.get("https://api.github.com/users/"+ this.username + "/repos" +"?access_token=" +this.apikey)
     .map(res=>res);

   }

 updateprofile(username:string){
   this.username=username;
 }

}
