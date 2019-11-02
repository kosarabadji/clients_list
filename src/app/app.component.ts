import { Component } from '@angular/core';
import {UsersService} from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu: boolean = true;
  chosen: string;
  prev: string;
  constructor(
      private usersService: UsersService
  ) {}


  ngOnInit() {
    this.listenToUserChange();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  listenToUserChange () {
    this.usersService.newSubject.subscribe(
        data => {
          if(window.innerWidth < 768) {
            this.toggleMenu();
          }
        },
        err => console.error(err)
    );
  }
}
