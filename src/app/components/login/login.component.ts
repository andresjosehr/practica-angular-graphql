import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { getUsers, login } from 'src/app/operations/query';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user              : FormGroup;
  loading           : boolean     = false;
  loginStatus       : number      = 0;
  emailValidator    : number      = 0;
  passwordValidator : number      = 0;


  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {


    if(localStorage.getItem('tokenJWT')){
        this.router.navigate(["profile"]);
    }

    this.user = this.formBuilder.group({

      email:    ['',  Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]

    });
    

  }

  submitLoginForm(){

    if(this.user.invalid){
      this.user.get("email").markAsDirty();
      this.user.get("password").markAsDirty();
      return;
    }
    

    this.loading=true;
    this.loginStatus=0;
    
    setTimeout(() => {

      const bodyData={
        email:  this.user.get('email').value,
        password:  this.user.get('password').value
      }

      this.api.request(login, 'login', bodyData).subscribe((result)=>{

        if(!result.status){
          this.loginStatus=1;
        } else{
          this.loginStatus=2;
          localStorage.setItem('tokenJWT', result.token);
          this.router.navigate(['/profile']);
        }

        this.loading=false;

      });
      
    }, 1500);

  }

}
;