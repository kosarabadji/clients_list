import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
         MdSidenavModule,
         MdListModule,
         MdProgressSpinnerModule,
         MdInputModule,
         MdCardModule,
         MdIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersService } from "./services/users.service";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdInputModule,
    MdCardModule,
    MdIconModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
