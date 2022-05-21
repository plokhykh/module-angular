import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {UserInterface} from "../interfaces/user.interface";
import {urls} from '../../../constants/urls';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(urls.users);
  }
}
