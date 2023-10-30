import Request from "./request";
import Payments from "./payments";
import Addressbook from "./address-book";
import { Headers, headersSchema } from "./types";
import Identity from "./identity";

export default class Fetcch {
  secretKey: string;
  request: Request;
  identity: Identity;
  payments: Payments;
  addressBook: Addressbook;

  private headers: Headers
  
  constructor(secretKey: string) {
    this.secretKey = secretKey;
  
    // check validity of secretKey

    this.headers = headersSchema.parse({
      "secret-key": secretKey
    })

    this.payments = new Payments(this.headers)
    this.addressBook = new Addressbook(this.headers)
    this.request = new Request(this.headers)
    this.identity = new Identity(this.headers)
  }
}