import axios from "axios";
import Apis from "../utils/api-config";
import {addressbookMessageSchema} from "../types/address-book/index";
import { getSecretKey } from "..";

export const generateMessage = async (data: addressbookMessageSchema): Promise<any> => {
    const req = await axios({
        url: `${Apis.wAddressBookGenerateMessageEndpoint}`,
        method: "POST",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
};