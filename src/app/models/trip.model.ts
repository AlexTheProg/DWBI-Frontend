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
  locationEndId: number,
  driverId?: number,
  clientId?: number
}
