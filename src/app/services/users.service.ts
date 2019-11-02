import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Subject } from 'rxjs/Subject';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

import { IUser } from "../interfaces/user.interface";

@Injectable()
export class UsersService {
  public newSubject = new Subject<IUser>();
  public searchQuery = new Subject<string>();
  public userList: IUser[];
  constructor(
      private http: Http
  ) { }

  getAll(): Observable<IUser[]> {
    let request = this.http.get('/assets/clients.json')
        .map(res => res.json())
    return request;
  }

  chooseUser(user: IUser): void {
    this.newSubject.next(user);
  }

  search(query: string): void {
    this.searchQuery.next(query);
  }
}
