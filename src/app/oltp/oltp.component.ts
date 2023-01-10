import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';
import { AppService } from '../app.service';
import { Driver } from '../models/driver.model';
import { AddEditClientComponent } from './edit-add-client/add-edit-client.component';
import { Client } from '../models/client.model';
import { Location } from '../models/location.model';
import { AddEditLocationComponent } from './add-edit-location/add-edit-location.component';
import { AddEditInvoiceComponent } from './add-edit-invoice/add-edit-invoice.component';
import { Invoice } from '../models/invoice.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Trip } from '../models/trip.model';
import { AddEditTripComponent } from './add-edit-trip/add-edit-trip.component';


@Component({
  selector: 'app-oltp',
  templateUrl: './oltp.component.html',
  styleUrls: ['./oltp.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OltpComponent {

  driverColumns: string[] = ['driver_id', 'first_name', 'last_name', 'phone_number', 'car_number', 'ride_type', 'rating'];
  clientColumns: string[] = ['client_id', 'first_name', 'last_name', 'phone_number', 'email'];
  locationColumns: string[] = ['location_id', 'location_type', 'region', 'city', 'address'];
  invoiceColumns: string[] = ['invoice_id', 'payment_type', 'tip', 'final_fee', 'status'];
  tripColumns: string[] = [
    'trip_id',
    'duration',
    'km',
    'initial_fee',
    'waiting_fee',
    'cancel_fee',
    'status',
    'address_start',
    'address_end',
    'date',
    'time'
  ];

  expandedElement: any = undefined;

  constructor(public dialog: MatDialog, public appService: AppService) {
  }


  onAddDriver(): void {
    this.dialog.open(AddEditDriverComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
  }

  onEditDriver(driver: Driver) {
    const m = this.dialog.open(AddEditDriverComponent, {
      width: '400px',
      data: {mode: 'edit', item: driver}
    });

  }

  onAddClient() {
    this.dialog.open(AddEditClientComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
  }

  onEditClient(client: Client) {
    this.dialog.open(AddEditClientComponent, {
      width: '400px',
      data: {mode: 'edit', item: client}
    });
  }

  onAddLocation() {
    this.dialog.open(AddEditLocationComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
  }

  onEditLocation(location: Location) {
    this.dialog.open(AddEditLocationComponent, {
      width: '400px',
      data: {mode: 'edit', item: location}
    });
  }

  onAddInvoice() {
    this.dialog.open(AddEditInvoiceComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
  }

  onEditInvoice(invoice: Invoice) {
    this.dialog.open(AddEditInvoiceComponent, {
      width: '400px',
      data: {mode: 'edit', item: invoice}
    });
  }

  onAddTrip() {
    this.dialog.open(AddEditTripComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
  }

  onEditTrip(trip: Trip) {
    this.dialog.open(AddEditTripComponent, {
      width: '400px',
      data: {mode: 'add', item: trip}
    });
  }
}
