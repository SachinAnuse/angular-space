export class Address {
  public addressLine1: string
  public addressLine2: string
  public city: string
  public state: string
  public postalCode: string
  public country: string

  constructor (
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    postalCode: string,
    country: string
  ) {
    this.addressLine1 = addressLine1
    this.addressLine2 = addressLine2
    this.city = city
    this.state = state
    this.postalCode = postalCode
    this.country = country
  }
}
