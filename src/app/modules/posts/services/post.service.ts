import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../interfaces/post.interface";
import {urls} from '../../../constants/urls';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PostInterface[]>{
    return this.http.get<PostInterface[]>(urls.posts)
  }
}
