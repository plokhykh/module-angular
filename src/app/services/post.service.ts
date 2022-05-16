import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../models/IPost";
import {IPostDetails} from "../models/IPostDetails";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url);
  }

  getById(id: string): Observable<IPostDetails> {
    return this.http.get<IPostDetails>(this._url+id);
  }

}
