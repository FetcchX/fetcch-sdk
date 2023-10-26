import axios from "axios";
import Apis from "../utils/api-config";
import {addressbookSchemaType} from "../types/address-book/index";
import { Headers } from "../types";

export const _create = async (data: addressbookSchemaType, headers:Headers): Promise<any> => {
    const req = await axios({
        url: `${Apis.wAddressBookEndpoint}`,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
}