import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerUser } from 'src/app/operations/mutation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userFormGroup   : FormGroup;
  successMessage  : String;
  errorMessage    : String;
  loading         : boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.userFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      email:    ['',  Validators.compose([Validators.email, Validators.required])],
    });
  }

  saveUser(){

    if(this.userFormGroup.invalid){
      this.userFormGroup.get("email").markAsDirty();
      this.userFormGroup.get("name").markAsDirty();
      this.userFormGroup.get("lastname").markAsDirty();
      this.userFormGroup.get("password").markAsDirty();
      return;
    }

    this.successMessage = undefined;
    this.errorMessage   = undefined;
    this.loading=true

    setTimeout(() => {

      this.apiService.registerData(registerUser, this.userFormGroup.value).subscribe((result)=>{
      
        this.successMessage = result.data["register"].status ? result.data["register"].message : undefined;
        this.errorMessage   = !result.data["register"].status ? result.data["register"].message : undefined;
        this.loading=false;
  
      }, err =>{
  
        this.errorMessage   = err;
        this.loading=false;
  
      })
      
    }, 2000);
    
  }

}
