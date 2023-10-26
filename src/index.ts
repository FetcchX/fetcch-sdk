import checker from "./init";
import Apis from "./utils/api_config";
import request from "./request";
import identity from "./identity";
import payments from "./payments";
import addressBook from "./address-book";

let secretKey:string | null = "4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5";

export function initialise(key:string) {
  secretKey = key;
}

export function getSecretKey() {
  return secretKey;
}

class Fetcch {
  secretKey: string;
  request = request;
  
  constructor(secretKey: string) {
    this.secretKey = secretKey;
  

  }
}


export default {
	initialise,
	checker,
}
