import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    invoice_id: '',
    payment_type: '',
    tip: 0,
    final_fee: 0,
    status: ''
  }


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.mode = this.data.mode;
    if (this.data.item) {
      this.initialItem = this.data.item;
    }

    this.form = this.fb.group({
      payment_type: [this.initialItem.payment_type, Validators.required],
      tip: [this.initialItem.tip || null, Validators.required],
      final_fee: [this.initialItem.final_fee || null, Validators.required],
      status: [this.initialItem.status, Validators.required]
    });
  }
}
