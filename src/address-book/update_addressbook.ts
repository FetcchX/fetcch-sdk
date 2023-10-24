import Apis from "../utils/api_config";
import axios from "axios";
import {updateAddressbookSchemaType} from "../types/address-book/index";

export const updateAddressbook = async (data: updateAddressbookSchemaType): Promise<any> => {
    const req = await axios({
        url: Apis.wAddressBookEndpoint,
        method: "PATCH",
        headers: {
            // ...headers,
        },
        data
    })

    const res = await req.data

    return res.data
};