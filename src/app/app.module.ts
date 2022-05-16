import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from './components/posts/posts/posts.component';
import {PostComponent} from './components/posts/post/post.component';
import {CommentsComponent} from './components/comments/comments/comments.component';
import {CommentComponent} from './components/comments/comment/comment.component';
import {CommentDetailComponent} from './components/comments/comment-details/comment-detail.component';
import {PostDetailsComponent} from './components/posts/post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "posts",
        component: PostsComponent,
        children: [
          {path: ":id", component: PostDetailsComponent}
        ]
      },
      {
        path: "comments",
        component: CommentsComponent,
        children: [
          {path: ":id", component: CommentDetailComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
