import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces/car.interface";
import {RegEx} from "../../constants/regex";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      price: new FormControl(null, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      year: new FormControl(null, [Validators.min(0), Validators.max(1000000)])
    })
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      const ind = this.cars.findIndex(value => value.id === id);
      this.cars.splice(ind, 1);
    })
  }

  update(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, price: car.price, year: car.year})
  }

  save(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(item => item.id === this.carForUpdate?.id)
        Object.assign(updateCar, value)
        this.carForUpdate = null;
      })
    }
  }
}
