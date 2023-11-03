import Request from "./request";
import Payments from "./payments";
import Addressbook from "./address-book";
import { Headers, headersSchema } from "./types";
import Identity from "./identity";
import Auth from "./auth";
import Sign from "./utils/sign/adapters";

export default class Fetcch {
  secretKey: string;
  request: Request;
  identity: Identity;
  payments: Payments;
  addressBook: Addressbook;
  auth: Auth;
  sign: Sign;
  private headers: Headers

  constructor(secretKey: string, token?: string) {
    this.secretKey = secretKey;

    // check validity of secretKey

    this.headers = headersSchema.parse({
      "secret-key": secretKey,
      "Authorization": token ? `Bearer ${token}` : undefined
    })

    this.payments = new Payments(this.headers)
    this.addressBook = new Addressbook(this.headers)
    this.request = new Request(this.headers)
    this.identity = new Identity(this.headers)
    this.auth = new Auth(this.headers)
    this.sign = new Sign()
  }
}