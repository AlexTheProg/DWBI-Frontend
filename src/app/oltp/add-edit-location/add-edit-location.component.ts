import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../shared/dialog-data.model';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-add-edit-location',
  templateUrl: './add-edit-location.component.html',
  styleUrls: ['./add-edit-location.component.scss']
})
export class AddEditLocationComponent {
  form: FormGroup;
  mode: 'add' | 'edit';
  initialItem: Location = {
    location_id: '',
    location_type: '',
    region: '',
    city: '',
    address: ''
  }


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      location_type: [this.initialItem.location_type, Validators.required],
      region: [this.initialItem.region, Validators.required],
      city: [this.initialItem.city, Validators.required],
      address: [this.initialItem.address, Validators.required]
    });
  }
}
