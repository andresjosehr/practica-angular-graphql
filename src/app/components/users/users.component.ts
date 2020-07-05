import { Component, OnInit } from '@angular/core';
import { getUsers } from 'src/app/operations/query';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<any>;
  constructor(
    private apiService    : ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.request(getUsers, "users").subscribe((values)=>{
      this.users=values
    })
  }

}
