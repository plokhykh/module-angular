import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentsResolver} from "./services";

const routes: Routes = [
  {path: "", component: CommentsComponent,
  resolve: {commentsData: CommentsResolver}}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
