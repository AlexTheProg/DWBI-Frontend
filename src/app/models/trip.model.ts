import { Client } from './client.model';
import { Driver } from './driver.model';
import { Location } from './location.model';

export interface Trip {
  id?: number,
  distance: number,
  estimatedCost: number,
  pickupTime: string,
  dropoffTime: string,
  currency: string,
  waitingFee: number,
  cancelFee: number,
  status: string,
  locationStartId: number,
  locationStart?: Location,
  locationEndId: number,
  locationEnd?: Location,
  driverId?: number,
  driver?: Driver,
  clientId?: number,
  client?: Client
}
