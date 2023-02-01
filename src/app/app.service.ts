import { HttpClient } from '@angular/common/http';
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
  private BASE_URL = 'http://localhost:8080/api/v1/oltp/';

  constructor(private httpClient: HttpClient) {
  }

  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.BASE_URL + 'locations');
  }

  getInvoices(): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>(this.BASE_URL + 'invoices');
  }

  getDrivers(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(this.BASE_URL + 'drivers');
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.BASE_URL + 'clients');
  }

  getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.BASE_URL + 'trips');
  }

  addDriver(driver: Driver) {
    return this.httpClient.post(this.BASE_URL + 'drivers', driver);
  }

  addClient(client: Client) {
    return this.httpClient.post(this.BASE_URL + 'clients', client);
  }

  addLocation(loc: Location) {
    return this.httpClient.post(this.BASE_URL + 'locations', loc);
  }

  addTrip(trip: Trip) {
    return this.httpClient.post(this.BASE_URL + 'trips', trip);
  }

  addInvoice(inv: Invoice) {
    return this.httpClient.post(this.BASE_URL + 'invoices', inv);
  }

  editDriver(driver: Driver) {
    return this.httpClient.put(`${this.BASE_URL}drivers/${driver.id}`, driver);
  }

  editClient(client: Client) {
    return this.httpClient.put(`${this.BASE_URL}clients/${client.id}`, client);
  }

  editLocation(loc: Location) {
    return this.httpClient.put(`${this.BASE_URL}locations/${loc.id}`, loc);
  }

  editTrip(trip: Trip) {
    return this.httpClient.put(`${this.BASE_URL}trips/${trip.id}`, trip);
  }

  editInvoice(inv: Invoice) {
    return this.httpClient.put(`${this.BASE_URL}invoices/${inv.id}`, inv);
  }

  delete(type: string, id: number): Observable<any> {
    return this.httpClient.delete(`${this.BASE_URL}${type.toLowerCase()}s/${id}`);
  }
}
