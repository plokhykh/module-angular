import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {PostsRoutingModule} from "./posts-routing.module";

import {PostsComponent} from "./components/posts/posts.component";
import {PostService} from "./services/post.service";
import { PostComponent } from './components/post/post.component';
import {PostsResolver} from "./services";


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
  providers: [
    PostService,
    PostsResolver
  ]
})
export class PostsModule { }
