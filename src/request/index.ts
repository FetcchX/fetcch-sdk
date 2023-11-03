import { _get } from './get'
import { _create } from './create'
import { _generateMessage } from './generate-message'
import { _update } from './update'
import { Headers } from '../types'
import { CreateRequest, UpdateRequest, GenerateMessage } from '../types/request/index'
export default class Request {
    private headers: Headers

    constructor(headers: Headers) {
        this.headers = headers
    }

    get(requestId: string) {
        return _get(requestId, this.headers)
    }

    create(data: CreateRequest) {
        return _create(data, this.headers)
    }

    generateMessage(data: GenerateMessage) {
        return _generateMessage(data, this.headers)
    }

    update(data: UpdateRequest) {
        return _update(data, this.headers)
    }
}
