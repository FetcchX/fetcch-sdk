import axios from "axios";
import Apis from "../utils/api_config";
import { getSecretKey } from "..";

export const get = async (owner: string): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wAddressBookEndpoint}?owner=${owner}`,
        method: "GET",
        headers: {
            "secret-key": getSecretKey()
        }
    })

    const res = await req.data

    return res.data
};