import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICar} from "../interfaces/car.interface";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.http.get<ICar[]>(urls.cars)
  }

  updateById(id: number, carForUpdate: Partial<ICar>): Observable<ICar> {
    return this.http.patch<ICar>(`${urls.cars}/${id}`, carForUpdate);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${urls.cars}/${id}`);
  }

  create(car: ICar): Observable<ICar> {
    return this.http.post<ICar>(urls.cars, car)
  }
}
