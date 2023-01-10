import { Injectable } from '@angular/core';
import { Location } from './models/location.model';
import { Invoice } from './models/invoice.model';
import { Driver } from './models/driver.model';
import { Client } from './models/client.model';
import { Trip } from './models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  getLocations(): Location[] {
    return [
      {
        location_id: '1',
        location_type: 'urban',
        region: 'Bucharest',
        city: 'Bucharest',
        address: '...'
      }
    ];
  }

  getInvoices(): Invoice[] {
    return [
      {
        invoice_id: '1',
        payment_type: 'card',
        tip: 2,
        final_fee: 22,
        status: 'Done'
      }
    ];
  }

  getDrivers(): Driver[] {
    return [
      {
        driver_id: '1',
        car_number: 'B200ABC',
        first_name: 'Ioan',
        last_name: 'Popa',
        phone_number: '+40..',
        ride_type: 'standard',
        rating: 9
      }
    ];
  }

  getClients(): Client[] {
    return [
      {
        client_id: '1',
        first_name: 'Ionescu',
        last_name: 'Alexandru',
        phone_number: '+40..',
        email: '..@..'
      }
    ];
  }

  getTrips(): Trip[] {
    return [
      {
        trip_id: '1',
        duration: '20min',
        km: 10,
        initial_fee: 10,
        waiting_fee: 5,
        cancel_fee: 3,
        status: 'done',
        address_start: '..start address',
        address_end: '..end address',
        date: '20.01.22',
        time: '12:20PM',
      }
    ];
  }
}
