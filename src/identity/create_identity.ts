import axios from "axios";
import Apis from "../utils/api_config";
import {identitySchema} from "../types/identity";
XMLDocument
export const createIdentity = async (body: identitySchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wGetIdentityEndpoint,
        method: "POST",
        params: {
            body
        },
        headers: {
            // ...headers,
        }
    })

    const res = await req.data

    return res.data
}