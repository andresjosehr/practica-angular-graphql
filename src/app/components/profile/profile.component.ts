import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { userData } from 'src/app/operations/query';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name      : String;
  lastname  : String;
  email     : String;

  constructor(
    private api           : ApiService,
    private router        : Router,
    private loginService  : LoginService
  ) { }

  ngOnInit(): void { 

    this.getProfileData();
    
  }

  getProfileData(){

    this.api.request(userData, "me", {}, {authorization: localStorage.getItem('tokenJWT')})
    .subscribe((result)=>{
        this.name=result.user.name
        this.lastname=result.user.lastname
        this.email=result.user.email
      })

  }

  logout(){
    this.loginService.logout();
  }

}
