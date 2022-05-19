import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UserService} from "./user.service";
import {UsersComponent} from "./users-components/users/users.component";
import {UserComponent} from './users-components/user/user.component';
import {UsersRoutingModule} from "./users-routing.module";



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
  providers: [UserService]
})
export class UsersModule { }
