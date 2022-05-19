import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {PostsRoutingModule} from "./posts-routing.module";

import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostService} from "./post.service";
import { PostComponent } from './posts-components/post/post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  providers: [PostService]
})
export class PostsModule { }
