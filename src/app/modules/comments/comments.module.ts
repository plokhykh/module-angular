import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from "./comments-routing.module";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {CommentService} from "./services/comment.service";
import {CommentsResolver} from "./services";



@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentsRoutingModule
  ],
  providers: [
    CommentService,
    CommentsResolver
  ]
})
export class CommentsModule { }
