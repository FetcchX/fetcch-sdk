import {_get} from "./get";
import {_generateMessage} from "./generate-identity-message";
import {_create} from "./create-identity";
import { Headers } from '../types';
import {generateIdentityMessageSchema, identitySchema} from "../types/identity";
export default class identity {
 
    private headers: Headers
    
    constructor(headers: Headers) {
        this.headers = headers
    }

    get(id: string) {
        return _get(id, this.headers)
    }

    generateMessage(data: generateIdentityMessageSchema) {
        return _generateMessage(data, this.headers)
    }

    create(data: identitySchema) {
        return _create(data,this.headers)
    }
}
