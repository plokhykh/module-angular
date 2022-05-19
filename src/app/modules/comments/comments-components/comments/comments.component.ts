import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../comment.service";
import {CommentInterface} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentInterface[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(response => this.comments = response)
  }

}
