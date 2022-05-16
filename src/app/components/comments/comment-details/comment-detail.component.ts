import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICommentDetails} from "../../../models/ICommentDetails";
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  commentDetails: ICommentDetails

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getById(id).subscribe(response => this.commentDetails = response)
    })
  }

}
