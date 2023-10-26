import Apis from "../utils/api-config";
import axios from "axios";
import {updateAddressbookSchemaType} from "../types/address-book/index";
import { Headers } from "../types";

export const _update = async (data: updateAddressbookSchemaType, headers:Headers): Promise<any> => {
    const req = await axios({
        url: Apis.wAddressBookEndpoint,
        method: "PATCH",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
};