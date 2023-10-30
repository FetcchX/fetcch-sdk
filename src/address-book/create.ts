import axios from "axios";
import Apis from "../utils/api-config";
import {AddressBook} from "../types/address-book/index";
import { Headers } from "../types";

export const _create = async (data: AddressBook, headers:Headers): Promise<any> => {
    const req = await axios({
        url: `${Apis.wAddressBookEndpoint}`,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
}