import { Actions, Headers } from "../types";
import { _buildTransaction } from "./build-transaction-request";
import { _buildDryTransaction } from "./dry-build-transaction";

export default class Payments {
    private headers: Headers
    
    constructor(headers: Headers) {
        this.headers = headers
    }

    buildTransaction(actions: Actions) {
        return _buildTransaction(actions, this.headers)
    }

    dryBuildTransaction(actions: Actions) {
        return _buildDryTransaction(actions, this.headers)
    }
}