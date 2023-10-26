import { _login } from "./login";
import { _generateMessage } from "./login-message";
import { Authentication, Headers } from "../types";

export default class Auth {
    private headers: Headers
    
    constructor(headers: Headers) {
        this.headers = headers
    }

    login(actions: Authentication) {
        return _login(actions,this.headers)
    }

    generateMessage(owner: string) {
        return _generateMessage(owner, this.headers)
    }
}