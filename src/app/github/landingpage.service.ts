import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LandingpageService {

  private username: string;
  private apikey :string = "2bf1bedfa268888ef5ffada82d2fe5b644b87742";

  constructor(private http:HttpClient) {
      console.log("service is ready");
 }
 getprofileInfo(username){
   console.log(this.username);
   return this.http.get("https://api.github.com/users/"+username+"?access_token=" +this.apikey)
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
