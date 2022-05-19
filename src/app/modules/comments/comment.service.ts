import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "./interfaces/comment.interface";
import {urls} from '../../constants/urls';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(urls.comments);
  }
}
