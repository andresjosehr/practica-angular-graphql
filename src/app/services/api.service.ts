import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

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
          context: headerData
        }).valueChanges.pipe(map((result: any) =>{
          return result.data[dataResult];
        }));
  }
}
