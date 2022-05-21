import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserInterface} from "../../interfaces";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<UserInterface[]> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    return this.userService.getAll();
  }

}
