import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { AppService } from '../app.service';
import { Client } from '../models/client.model';
import { Driver } from '../models/driver.model';
import { Invoice } from '../models/invoice.model';
import { Location } from '../models/location.model';
import { Trip } from '../models/trip.model';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';
import { AddEditInvoiceComponent } from './add-edit-invoice/add-edit-invoice.component';
import { AddEditLocationComponent } from './add-edit-location/add-edit-location.component';
import { AddEditTripComponent } from './add-edit-trip/add-edit-trip.component';
import { AddEditClientComponent } from './edit-add-client/add-edit-client.component';


@Component({
  selector: 'app-oltp',
  templateUrl: './oltp.component.html',
  styleUrls: ['./oltp.component.scss']
})
export class OltpComponent {

  driverColumns: string[] = ['id', 'lastName', 'firstName', 'carPlates', 'rating', 'phoneNumber', 'driverType'];
  clientColumns: string[] = ['id', 'firstName', 'lastName', 'rating', 'phoneNumber', 'username', 'password', 'email'];
  locationColumns: string[] = ['id', 'locationType', 'county', 'city', 'street'];
  invoiceColumns: string[] = ['id', 'amountToPay', 'status', 'tips', 'paymentType', 'tripId'];
  tripColumns: string[] = [
    'id',
    'distance',
    'estimatedCost',
    'pickupTime',
    'dropoffTime',
    'currency',
    'status',
    'waitingFee',
    'cancelFee',
    'locationStartId',
    'locationEndId',
    'driverId',
    'clientId',
  ];
  drivers$: Observable<Driver[]> | undefined;
  clients$: Observable<Client[]> | undefined;
  locations$: Observable<Location[]> | undefined;
  trips$: Observable<Trip[]> | undefined;
  invoices$: Observable<Invoice[]> | undefined;


  constructor(public dialog: MatDialog, public appService: AppService) {
    this.setDrivers();
    this.setClients();
    this.setLocations();
    this.setTrips();
    this.setInvoices();
  }

  onAddDriver(): void {
    const dialogRef = this.dialog.open(AddEditDriverComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
    this.handleDialogClose(dialogRef, this.appService.addDriver, this.setDrivers.bind(this));
  }

  onEditDriver(driver: Driver) {
    const ref = this.dialog.open(AddEditDriverComponent, {
      width: '400px',
      data: {mode: 'edit', item: driver}
    });

    this.handleDialogClose(ref, this.appService.editDriver, this.setDrivers.bind(this));

  }

  onAddClient() {
    const ref = this.dialog.open(AddEditClientComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
    this.handleDialogClose(ref, this.appService.addClient, this.setClients.bind(this));
  }

  onEditClient(client: Client) {
    const ref = this.dialog.open(AddEditClientComponent, {
      width: '400px',
      data: {mode: 'edit', item: client}
    });
    this.handleDialogClose(ref, this.appService.editClient, this.setClients.bind(this));
  }

  onAddLocation() {
    const ref = this.dialog.open(AddEditLocationComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
    this.handleDialogClose(ref, this.appService.addLocation, this.setLocations.bind(this));
  }

  onEditLocation(location: Location) {
    const ref = this.dialog.open(AddEditLocationComponent, {
      width: '400px',
      data: {mode: 'edit', item: location}
    });
    this.handleDialogClose(ref, this.appService.editLocation, this.setLocations.bind(this));
  }

  onAddInvoice() {
    const ref = this.dialog.open(AddEditInvoiceComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
    this.handleDialogClose(ref, this.appService.addInvoice, this.setInvoices.bind(this));
  }

  onEditInvoice(invoice: Invoice) {
    const ref = this.dialog.open(AddEditInvoiceComponent, {
      width: '400px',
      data: {mode: 'edit', item: invoice}
    });
    this.handleDialogClose(ref, this.appService.editInvoice, this.setInvoices.bind(this));
  }

  onAddTrip() {
    const ref = this.dialog.open(AddEditTripComponent, {
      width: '400px',
      data: {mode: 'add'}
    });
    this.handleDialogClose(ref, this.appService.addTrip, this.setTrips.bind(this));
  }

  onEditTrip(trip: Trip) {
    const ref = this.dialog.open(AddEditTripComponent, {
      width: '400px',
      data: {mode: 'add', item: trip}
    });
    this.handleDialogClose(ref, this.appService.editTrip, this.setTrips.bind(this));
  }


  onDelete(type: string, id: number) {
    // @ts-ignore
    return this.appService.delete(type, id).pipe(take(1)).subscribe(() => this[`set${type}s`]());
  }

  private handleDialogClose(dialogRef: MatDialogRef<any>, saveChangesCallback: Function, reloadCallback?: any): void {
    dialogRef.afterClosed().pipe(take(1)).subscribe(res => {
      if (res) {
        saveChangesCallback(res).pipe(
          take(1),
          // switchMap(reloadCallback)
        ).subscribe(() => {
          reloadCallback();
          console.log(res)
        });
      }
    });
  }

  private setDrivers() {
    this.drivers$ = undefined;
    this.drivers$ = this.appService.getDrivers();

  }

  private setClients() {
    this.clients$ = undefined;
    this.clients$ = this.appService.getClients();
  }

  private setLocations() {
    this.locations$ = undefined;
    this.locations$ = this.appService.getLocations();
  }

  private setTrips() {
    this.trips$ = undefined;
    this.trips$ = this.appService.getTrips();
  }

  private setInvoices() {
    this.invoices$ = undefined;
    this.invoices$ = this.appService.getInvoices();
  }

}
