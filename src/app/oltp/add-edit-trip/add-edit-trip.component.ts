import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../shared/dialog-data.model';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-add-edit-trip',
  templateUrl: './add-edit-trip.component.html',
  styleUrls: ['./add-edit-trip.component.scss']
})
export class AddEditTripComponent {
  form: FormGroup;
  mode: 'add' | 'edit';
  initialItem: Trip = {
    trip_id: '',
    duration: '',
    km: 0,
    initial_fee: 0,
    waiting_fee: 0,
    cancel_fee: 0,
    status: '',
    address_start: '',
    address_end: '',
    date: '',
    time: '',
  }


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      duration: [this.initialItem.duration, Validators.required],
      km: [this.initialItem.km || null, Validators.required],
      initial_fee: [this.initialItem.initial_fee || null, Validators.required],
      waiting_fee: [this.initialItem.waiting_fee || null, Validators.required],
      cancel_fee: [this.initialItem.cancel_fee || null, Validators.required],
      status: [this.initialItem.status, Validators.required],
      address_start: [this.initialItem.address_start, Validators.required],
      address_end: [this.initialItem.address_end, Validators.required],
      date: [this.initialItem.date, Validators.required],
      time: [this.initialItem.time, Validators.required],
    });
  }

}
