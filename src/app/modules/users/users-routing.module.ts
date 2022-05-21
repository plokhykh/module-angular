import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {UsersComponent} from "./components/users/users.component";
import {UsersResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {userData: UsersResolver}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
