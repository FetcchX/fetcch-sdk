import {_get} from './get';
import {_generateMessage} from './addressbook-generate-message';
import {_create} from './create-addressbook';
import {_update} from './update-addressbook';
import {addressbookMessageSchema, updateAddressbookSchemaType,addressbookSchemaType} from "../types/address-book/index";
import { Headers } from '../types';
export default class Addressbook{
    private headers: Headers
    
    constructor(headers: Headers) {
        this.headers = headers
    }

    get(owner: string) {
        return _get(owner, this.headers)
    }


}
