import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

let routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(m => m.CommentsModule)}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
