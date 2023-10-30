import axios from "axios";
import Apis from "../utils/api-config";
import { Headers } from "../types";

export const _get = async (owner: string, token: String): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wAddressBookEndpoint}?owner=${owner}`,
        method: "GET",

        headers: {
            "Authorization": "Bearer " + token,
        },
    })

    const res = await req.data

    return res.data
};