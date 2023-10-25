import axios from "axios";
import Apis from "../utils/api_config";
import {addressbookMessageSchema} from "../types/address-book/index";
import { getSecretKey } from "..";

export const createAddressbook = async (data: addressbookMessageSchema): Promise<any> => {
    const req = await axios({
        url: `${Apis.wAddressBookEndpoint}`,
        method: "POST",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}