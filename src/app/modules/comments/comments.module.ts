import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from "./comments-routing.module";
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import {CommentService} from "./comment.service";



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
  providers: [CommentService]
})
export class CommentsModule { }
