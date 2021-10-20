import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map}  from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!:string;
  private clientid= 'd8a7e0329ed1842b67b0';
  private clientsecret='c61aebe9ffdc7fd9ebc78c853f5f14038751a2f9';
  

  constructor(private http:HttpClient) { 
    console.log("app is now ready");
    this.username='xs-ship-it';

   }
  
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" +this.username+ "?client_id=" +this.clientid +"&client_secret=" +this.clientsecret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" +this.username+ "/repos?client_id=" +this.clientid +"&client_secret=" +this.clientsecret) 
  }
  updateProfile(username:string){
    this.username=username;

  }
}
