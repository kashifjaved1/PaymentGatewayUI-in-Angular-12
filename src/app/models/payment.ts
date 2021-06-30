export interface Payment {
  creditCardNumber: string,
  cardHolder: string,
  expiry: string,
  cvv: string,
  amount: bigint
}
