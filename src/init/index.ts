import request from "../request"
import addressBook from "../address-book"
import identity from "../identity"
import utils from "../utils"
import { getSecretKey } from ".."

export default function checker() {
    if (getSecretKey() === null) {
        return null;
    } else {
        return {
            request,
            addressBook,
            identity,
            utils
        }
    }
}