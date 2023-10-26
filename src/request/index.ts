import { _get } from './get'
import { _create } from './create-request'
import { _generateMessage } from './generate-message'
import { _update } from './update-request'
import {Headers} from '../types'
import {RequestSchema, MessageSchema, UpdateRequestSchema} from '../types/request/index'
export default class Request {
    private headers: Headers
    
    constructor(headers: Headers) {
        this.headers = headers
    }

    get(requestId: string) {
        return _get(requestId, this.headers)
    }

    create(data: RequestSchema) {
        return _create(data, this.headers)
    }

    generateMessage(data: MessageSchema) {
        return _generateMessage(data, this.headers)
    }

    update(data: UpdateRequestSchema) {
        return _update(data, this.headers)
    }
}
