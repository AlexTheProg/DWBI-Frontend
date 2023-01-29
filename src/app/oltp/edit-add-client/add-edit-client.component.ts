import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../shared/dialog-data.model';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-edit-add-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent {
  form: FormGroup;
  mode: 'add' | 'edit';
  initialItem: Client = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    rating: 0,
  }


  constructor(
    public dialogRef: MatDialogRef<AddEditClientComponent>,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      firstName: [this.initialItem.firstName, Validators.required],
      lastName: [this.initialItem.lastName, Validators.required],
      rating: [this.initialItem.rating || null, Validators.required],
      phoneNumber: [this.initialItem.phoneNumber, Validators.required],
      username: [this.initialItem.username, Validators.required],
      password: [this.initialItem.password, Validators.required],
      email: [this.initialItem.email, [Validators.required, Validators.email]],
    });
  }

  onAdd(): void {
    this.dialogRef.close(this.initialItem.id ? {id: this.initialItem.id, ...this.form.value} : this.form.value);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

}
