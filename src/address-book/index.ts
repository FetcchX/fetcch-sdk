import { _get } from './get';
import { _generateMessage } from './generate-message';
import { _create } from './create';
import { _update } from './update';
import { UpdateAddressbook, AddressBook, AddressbookMessage, } from "../types/address-book/index";
import { Headers } from '../types';
export default class Addressbook {
    private headers: Headers

    constructor(headers: Headers) {
        this.headers = headers
    }

    get(owner: string) {
        return _get(owner, this.headers)
    }

    generateMessage(data: AddressbookMessage,) {
        return _generateMessage(data, this.headers)
    }

    create(data: AddressBook) {
        return _create(data, this.headers)
    }

    update(data: UpdateAddressbook) {
        return _update(data, this.headers)
    }
}
