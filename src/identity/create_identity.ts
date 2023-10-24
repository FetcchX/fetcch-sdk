import axios from "axios";
import Apis from "../utils/api_config";
import {identitySchema} from "../types/identity";

export const createIdentity = async (data: identitySchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wGetIdentityEndpoint,
        method: "POST",
        headers: {
            // ...headers,
        },
        data
    })

    const res = await req.data

    return res.data
}