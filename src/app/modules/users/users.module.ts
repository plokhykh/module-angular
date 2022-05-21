import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UserService} from "./services/user.service";
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from './components/user/user.component';
import {UsersRoutingModule} from "./users-routing.module";
import {UsersResolver} from "./services";



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers: [
    UserService,
    UsersResolver
  ]
})
export class UsersModule { }
