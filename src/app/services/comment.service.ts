import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../models/IComment";
import {ICommentDetails} from "../models/ICommentDetails";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private _url = 'https://jsonplaceholder.typicode.com/comments/'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this._url);
  }

  getById(id: string): Observable<ICommentDetails> {
    return this.http.get<ICommentDetails>(this._url+id)
  }
}
