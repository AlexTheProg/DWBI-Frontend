import { Driver } from './driver.model';
import { Client } from './client.model';
import { Invoice } from './invoice.model';

export interface Trip {
  trip_id: string,
  duration: string,
  km: number,
  initial_fee: number,
  waiting_fee: number,
  cancel_fee: number,
  status: string,
  address_start: string,
  address_end: string,
  date: string,
  time: string,
  driver?: Driver,
  client?: Client,
  invoice?: Invoice
}
