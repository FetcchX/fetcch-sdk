import request from "../request"
import addressBook from "../address-book"
import identity from "../identity"
import utils from "../utils"
import payments from "../payments"
import { getSecretKey } from ".."

export default function checker() {
    if (getSecretKey() === null) {
        return 'Please initialise the SDK with your secret key';
    } else {
        return {
            request,
            addressBook,
            identity,
            utils,
            payments
        }
    }
}