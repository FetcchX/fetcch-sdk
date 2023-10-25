import checker from "./init";

let secretKey:string | null = "4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5";

export function initialise(key:string) {
  secretKey = key;
}

export function getSecretKey() {
  return secretKey;
}

export default {
	initialise,
	checker,
}
