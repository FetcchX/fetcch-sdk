import { getSecretKey } from "..";
import Apis from "../utils/api_config";
import axios from "axios";

export const get = async (id: string): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wGetIdentityEndpoint}?id=${id}`,
        method: "GET",
        headers: {
            "secret-key":getSecretKey()
        }
    })

    const res = await req.data

    return res.data
}