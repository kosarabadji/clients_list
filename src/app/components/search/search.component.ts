import { Component } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchQuery: string;
  constructor(
      private usersService: UsersService
  ) { }

  ngOnInit() {

  }

  search() {
    this.usersService.search(this.searchQuery);     
  }

}
