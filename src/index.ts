import request from "./request";
import identity from "./identity";
import Payments from "./payments";
import addressBook from "./address-book";
import { Headers, headersSchema } from "./types";

export default class Fetcch {
  secretKey: string;
  request = request;
  identity = identity;
  payments: Payments;
  addressBook = addressBook;

  private headers: Headers
  
  constructor(secretKey: string) {
    this.secretKey = secretKey;
  
    // check validity of secretKey

    this.headers = headersSchema.parse({
      "secret-key": secretKey
    })

    this.payments = new Payments(this.headers)
  }
}