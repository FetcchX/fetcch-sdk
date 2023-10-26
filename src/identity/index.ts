import {_get} from "./get";
import {_generateMessage} from "./generate-message";
import {_create} from "./create";
import { Headers } from '../types';
import {GenerateIdentityMessage, Identity} from "../types/identity";
export default class identity {
 
    private headers: Headers
    
    constructor(headers: Headers) {
        this.headers = headers
    }

    get(id: string) {
        return _get(id, this.headers)
    }

    generateMessage(data: GenerateIdentityMessage) {
        return _generateMessage(data, this.headers)
    }

    create(data: Identity) {
        return _create(data,this.headers)
    }
}
