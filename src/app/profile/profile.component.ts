import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username!:string
 
 constructor(private profileService:ProfileService, private http:HttpClient) { 
   this.profileService.getProfileInfo().subscribe(profile=> {
     console.log(profile);
     this.profile =profile
   }) 
   this.profileService.getProfileRepos().subscribe((repos: any)=>{
     console.log(repos)
     this.repos!=repos
   })
   
 }
 findProfile(){
   this.profileService.updateProfile(this.username);
   this.profileService.getProfileInfo().subscribe(profile => {
     console.log(profile);
     this.profile = profile;
   });

   this.profileService.getProfileRepos().subscribe((repos: any) => {
     console.log(repos);
     this.repos = repos;
   })  	
 }
 // findProfile(){
 //   this.profileService.updateProfile(this.username);
 //   this.profileService.getProfileInfo().subscribe(profile=> {
 //     console.log(profile);
 //     this.profile =profile
 //   }) 
 //   this.profileService.getProfileRepos().subscribe(repos=>{
 //     console.log(repos)
 //     this.repos!=repos
 //   }) 
 // }

 ngOnInit(): void {
 }

}

