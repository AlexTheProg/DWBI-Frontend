import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    firstName: '',
    lastName: '',
    phoneNumber: '',
    driverType: '',
    carPlates: '',
    rating: 0
  }


  constructor(
    public dialogRef: MatDialogRef<AddEditDriverComponent>,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      firstName: [this.initialItem.firstName, Validators.required],
      lastName: [this.initialItem.lastName, Validators.required],
      phoneNumber: [this.initialItem.phoneNumber, Validators.required],
      driverType: [this.initialItem.driverType, Validators.required],
      carPlates: [this.initialItem.carPlates, Validators.required],
      rating: [this.initialItem.rating || null, Validators.required]
    });
  }

  onAdd(): void {
    this.dialogRef.close(this.initialItem.id ? {id: this.initialItem.id, ...this.form.value} : this.form.value);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
