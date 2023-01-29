import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../shared/dialog-data.model';
import { Invoice } from '../../models/invoice.model';

@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.scss']
})
export class AddEditInvoiceComponent {
  form: FormGroup;
  mode: 'add' | 'edit';
  initialItem: Invoice = {
    paymentType: '',
    amountToPay: 0,
    tips: 0,
    status: '',
    tripId: 0
  }


  constructor(
    public dialogRef: MatDialogRef<AddEditInvoiceComponent>,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      paymentType: [this.initialItem.paymentType, Validators.required],
      tips: [this.initialItem.tips || null, Validators.required],
      tripId: [this.initialItem.tripId || null, Validators.required],
      amountToPay: [this.initialItem.amountToPay || null, Validators.required],
      status: [this.initialItem.status, Validators.required]
    });
  }

  onAdd(): void {
    this.dialogRef.close(this.initialItem.id ? {id: this.initialItem.id, ...this.form.value} : this.form.value);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
