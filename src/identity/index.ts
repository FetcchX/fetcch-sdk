import { _get } from "./get";
import { _generateMessage } from "./generate-message";
import { _create } from "./create";
import { Headers } from '../types';
import { _update } from "./update";
import { GenerateIdentityMessage, IdentityIntent, UpdateIdentityIntent } from "../types/identity";
export default class Identity {

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

    create(data: IdentityIntent) {
        return _create(data, this.headers)
    }

    update(data: UpdateIdentityIntent) {
        return _update(data, this.headers)
    }
}
