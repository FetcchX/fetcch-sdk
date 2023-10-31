import axios from "axios";
import Apis from "../utils/api-config";
import { AddressbookMessage } from "../types/address-book/index";
import { Headers } from "../types";

export const _generateMessage = async (data: AddressbookMessage, headers: Headers): Promise<any> => {
    const req = await axios({
        url: `${Apis.wAddressBookGenerateMessageEndpoint}`,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
};