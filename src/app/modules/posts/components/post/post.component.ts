import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: PostInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
