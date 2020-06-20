import { Component } from '@angular/core';
import { GraphqlModule } from './graphql/graphql.module';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { login, getUsers, userData } from './operations/query';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-graphql';

  constructor(
    private apollo: Apollo, 
    private api: ApiService,
  ){
    
  }

  ngOnInit(){

    // const headers={
    //   headers: new HttpHeaders({
    //     authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlZWMxZWQ4N2VmODE4NTBlMGJiYjcyMiIsImlkIjoyLCJuYW1lIjoiQW5hcnR6IiwibGFzdG5hbWUiOiJNdWdpY2EgTGVkbyIsImVtYWlsIjoibXVnYW44NkBnbWFpbC5jb20ifSwiaWF0IjoxNTkyNjYxNzAxLCJleHAiOjE1OTI3NDgxMDF9.t1AhDvO8VDKVDNMeGx0vlR6aZ_doEyvbQG4hO2gBvE0",
    //   })
    // }

    // this.api.request(getUsers, 'users').subscribe((result)=>{
    //   console.log(result);
    // });
    
    // this.api.request(login, "login", {email: "mugan86@gmail.com", password: "1234"}).subscribe((result)=>{
    //   console.log(result)
    // })
    // this.api.request(userData, "userData", {}, headers).subscribe((result)=>{
    //   console.log(result)
    // })
  }

}
