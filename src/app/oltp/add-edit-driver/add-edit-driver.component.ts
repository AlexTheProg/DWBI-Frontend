import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '../../shared/dialog-data.model';
import { Driver } from '../../models/driver.model';


@Component({
  selector: 'app-add-edit-driver',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.scss']
})
export class AddEditDriverComponent {
  form: FormGroup;
  mode: 'add' | 'edit';
  initialItem: Driver = {
    first_name: '',
    last_name: '',
    phone_number: '',
    ride_type: '',
    car_number: '',
    rating: 0
  }


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      first_name: [this.initialItem.first_name, Validators.required],
      last_name: [this.initialItem.last_name, Validators.required],
      phone_number: [this.initialItem.phone_number, Validators.required],
      ride_type: [this.initialItem.ride_type, Validators.required],
      car_number: [this.initialItem.car_number, Validators.required],
      rating: [this.initialItem.rating || null, Validators.required]
    });
  }

}
