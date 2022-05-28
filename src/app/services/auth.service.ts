import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IUser} from "../interfaces/user.interface";
import {IToken} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = "access";

  constructor(private http: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.http.post<IToken>(urls.auth, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem('access', token.access)
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }
}
