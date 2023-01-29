import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Trip } from '../../models/trip.model';
import { DialogData } from '../../shared/dialog-data.model';

@Component({
  selector: 'app-add-edit-trip',
  templateUrl: './add-edit-trip.component.html',
  styleUrls: ['./add-edit-trip.component.scss']
})
export class AddEditTripComponent {

  form: FormGroup;
  mode: 'add' | 'edit';
  initialItem: Trip = {
    distance: 0,
    estimatedCost: 0,
    currency: '',
    waitingFee: 0,
    cancelFee: 0,
    status: '',
    locationStartId: 0,
    locationEndId: 0,
    driverId: 0,
    clientId: 0,
    pickupTime: '',
    dropoffTime: '',
  }


  constructor(
    public dialogRef: MatDialogRef<AddEditTripComponent>,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      distance: [this.initialItem.distance || null, Validators.required],
      estimatedCost: [this.initialItem.estimatedCost || null, Validators.required],
      pickupTime: [this.initialItem.pickupTime || null, Validators.required],
      dropoffTime: [this.initialItem.dropoffTime || null, Validators.required],
      currency: [this.initialItem.currency, Validators.required],
      status: [this.initialItem.status, Validators.required],
      waitingFee: [this.initialItem.waitingFee || null, Validators.required],
      cancelFee: [this.initialItem.cancelFee || null, Validators.required],
      locationStartId: [this.initialItem.locationStartId || null, Validators.required],
      locationEndId: [this.initialItem.locationEndId || null, Validators.required],
      driverId: [this.initialItem.driverId || null, Validators.required],
      clientId: [this.initialItem.clientId || null, Validators.required],
    });
  }

  onAdd(): void {
    const result = this.initialItem.id ? {id: this.initialItem.id, ...this.form.value} : this.form.value;
    if (typeof this.form.value.pickupTime !== 'string') {
      result.pickupTime = this.form.value.pickupTime.toISOString().slice(0, 19).replace('T', ' ');
    }
    if (typeof this.form.value.dropoffTime !== 'string') {
      result.dropoffTime = this.form.value.dropoffTime.toISOString().slice(0, 19).replace('T', ' ');
    }
    this.dialogRef.close(this.initialItem.id ? {id: this.initialItem.id, ...result} : result);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  getMaxDate() {
    return new Date();
  }

  getMinDate() {
    return this.form.get('pickupTime')?.value;
  }
}
