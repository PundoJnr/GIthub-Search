import { Component, OnInit } from '@angular/core';
//import {ProfileComponent} from '@angular/common/http';
import {LandingpageService} from '../github/landingpage.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  profile:any= []
  repos:any= []
  username:string

  constructor(private landingpageServe:LandingpageService) { }

  ngOnInit() {
   this.landingpageServe.updateprofile("cynthiataragon");
   this.landingpageServe.getprofileInfo("cynthiataragon").subscribe(profile=>{
     console.log(profile);
     this.profile=profile;
 })
   this.landingpageServe.getprofileRepos().subscribe(repos=>{
     console.log(repos);
     this.repos=repos;
   })

 }

 findprofile(){
   this.landingpageServe.updateprofile(this.username);
   this.landingpageServe.getprofileInfo(this.username).subscribe(profile=>{
     console.log(profile);
     this.profile=profile;
 })
   this.landingpageServe.getprofileRepos().subscribe(repos=>{
     console.log(repos);
     this.repos=repos;
   })

 }

}
