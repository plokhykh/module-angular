import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPostDetails} from "../../../models/IPostDetails";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(item => {
      let {state: {data}} = history;
      this.postDetails = data as IPostDetails;
    })
  }

}
