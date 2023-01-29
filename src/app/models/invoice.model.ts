export interface Invoice {
  id?: number,
  amountToPay: number,
  status: string,
  tips: number,
  paymentType: string,
  tripId: number
}
