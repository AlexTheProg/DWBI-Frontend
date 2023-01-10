import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    client_id: ''
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
      email: [this.initialItem.email, [Validators.required, Validators.email]],
    });
  }

}
