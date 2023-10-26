import Apis from "../utils/api-config";
import axios from "axios";
import {updateAddressbookSchemaType} from "../types/address-book/index";
import { getSecretKey } from "..";

export const update = async (data: updateAddressbookSchemaType): Promise<any> => {
    const req = await axios({
        url: Apis.wAddressBookEndpoint,
        method: "PATCH",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
};