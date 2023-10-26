import axios from "axios";
import Apis from "../utils/api_config";
import {identitySchema} from "../types/identity";
import { getSecretKey } from "..";

export const create = async (data: identitySchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wGetIdentityEndpoint,
        method: "POST",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}