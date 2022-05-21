import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {PostsComponent} from "./components/posts/posts.component";
import {PostsGuard, PostsResolver} from "./services";

const routes: Routes = [
  {
    path: "", component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canDeactivate: [PostsGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule {
}
