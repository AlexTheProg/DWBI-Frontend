export interface Invoice {
  invoice_id: string,
  payment_type: string,
  tip: number,
  final_fee: number,
  status: string
}
