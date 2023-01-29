import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Client } from './models/client.model';
import { Driver } from './models/driver.model';
import { Invoice } from './models/invoice.model';
import { Location } from './models/location.model';
import { Trip } from './models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  getLocations(): Observable<Location[]> {
    const a = {
      id: 1,
      locationType: 'URBAN',
      county: 'Ilfov',
      city: 'Domnesti',
      street: 'Str Tudor Vladimirescu nr. 72'
    };
    return of(Array(200).fill(a));
  }

  getInvoices(): Observable<Invoice[]> {
    return of(Array(200).fill({
      id: 1,
      paymentType: 'CARD',
      tips: 5,
      amountToPay: 22.3,
      status: 'CANCELLED',
      tripId: 1
    }));
  }

  getDrivers(): Observable<Driver[]> {
    const array = Array(200).fill({
      id: 1,
      carPlates: 'B200ABC',
      firstName: 'Ioan',
      lastName: 'Popa',
      phoneNumber: '+40..',
      driverType: 'COMFORT',
      rating: 4.8
    });
    array.push({id: 50})
    return of(array).pipe(delay(800));
  }

  getClients(): Observable<Client[]> {
    return of(Array(200).fill(
      {
        id: 1,
        lastName: 'Ionescu',
        firstName: 'Alexandru',
        rating: 4.3,
        phoneNumber: '+40..',
        username: 'fl',
        password: 'fl123',
        email: '..@..'
      }
    ));
  }

  getTrips(): Observable<Trip[]> {
    // return of(Array(200).fill(
    //   {
    //     id: Math.random(),
    //     distance: 4.2,
    //     estimatedCost: 50.3,
    //     currency: 'EURO',
    //     waitingFee: 16,
    //     cancelFee: 2,
    //     status: 'COMPLETED',
    //     locationStartId: 623,
    //     locationEndId: 706,
    //     driverId: 120,
    //     clientId: 483,
    //     pickupTime: '2022-10-25 17:38:09',
    //     dropoffTime: '2022-10-25 17:58:09'
    //   }
    // ));
    const a = [];
    for (let i = 0; i < 200; i++) {
      a.push({
        id: Math.random(),
        distance: 4.2,
        estimatedCost: 50.3,
        currency: 'EURO',
        waitingFee: 16,
        cancelFee: 2,
        status: 'COMPLETED',
        locationStartId: 623,
        locationEndId: 706,
        driverId: 120,
        clientId: 483,
        pickupTime: '2022-10-25 17:38:09',
        dropoffTime: '2022-10-25 17:58:09'
      })
    }
    return of(a);


  }

  addDriver(driver: Driver) {
    return of(true);
  }

  addClient(client: Client) {
    return of(true);
  }

  addLocation(loc: Location) {
    return of(true);
  }

  addTrip(trip: Trip) {
    return of(true);
  }

  addInvoice(inv: Invoice) {
    return of(true);
  }

  editDriver(driver: Driver) {
    return of(true);
  }

  editClient(client: Client) {
    return of(true);
  }

  editLocation(loc: Location) {
    return of(true);
  }

  editTrip(trip: Trip) {
    return of(true);
  }

  editInvoice(inv: Invoice) {
    return of(true);
  }

  delete(type: string, id: number): Observable<any> {
    return of(true);
  }
}
