import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { RegisterUserInterface } from '../components/register-user/register-user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  request(queryData, dataResult, Bodydata = {}, headerData = {}){


    return this.apollo.watchQuery({
          query: queryData,
          variables: Bodydata,
          fetchPolicy: 'network-only',
          context: headerData ? { headers: new HttpHeaders(headerData) } : null,
        }).valueChanges.pipe(map((result: any) =>{
          return result.data[dataResult];
        }));
  }

  registerData(queryData, data){

    return this.apollo.mutate({
      mutation: queryData,
      variables: {
        data
      }
    })
  }
}
