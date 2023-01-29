import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    locationType: '',
    county: '',
    city: '',
    street: ''
  }


  constructor(
    public dialogRef: MatDialogRef<AddEditLocationComponent>,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      locationType: [this.initialItem.locationType, Validators.required],
      county: [this.initialItem.county, Validators.required],
      city: [this.initialItem.city, Validators.required],
      street: [this.initialItem.street, Validators.required]
    });
  }

  onAdd(): void {
    this.dialogRef.close(this.initialItem.id ? {id: this.initialItem.id, ...this.form.value} : this.form.value);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
