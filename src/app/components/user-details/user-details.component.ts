import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:IUser;
  showImage:boolean = false;
  constructor(
      private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.newSubject.subscribe(
        user => this.user = user,
        err => console.error(err)
    )
  }
  
  toggleAvatar() {
    this.showImage = !this.showImage;
  }

}
