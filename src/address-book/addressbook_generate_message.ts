import axios from "axios";
import Apis from "../utils/api_config";
import {addressbookMessageSchema} from "../types/address-book/index";

export const generateAddressBookMessage = async (data: addressbookMessageSchema): Promise<any> => {
    const req = await axios({
        url: `${Apis.wAddressBookGenerateMessageEndpoint}`,
        method: "POST",
        headers: {
            // ...headers,
        },
        data
    })

    const res = await req.data

    return res.data
};