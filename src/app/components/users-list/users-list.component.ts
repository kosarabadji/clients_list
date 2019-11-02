import {Component } from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";

import * as _ from 'lodash';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent  {

  users: Array<IUser>;
  results:Array<any>;

  constructor(
      private usersService: UsersService
  ) {
    this.results = [];
  }

  ngOnInit() {
    this.getAll();
    this.search();
  }

  getAll():void {
    this.usersService.getAll().subscribe(
        data =>{
          this.users = data;
          this.results = data
        },
        err => console.error(err)
    );
  }

  chooseUser(user) :void {
    this.usersService.chooseUser(user);
  };

  
  search():void { 
    this.usersService.searchQuery.subscribe(
        data => {
          if(data.length < 1) {
            this.results = this.users;
            return;
          }

          let users = this.users;
          let query = data.toLowerCase();

          this.results = _.filter(users, user =>
              _.some(user, field =>
                  _.some(field, val =>
                  _.toString(val).toLowerCase().indexOf(query) != -1)));
        },
        err => console.error(err)
    )
  }
}
