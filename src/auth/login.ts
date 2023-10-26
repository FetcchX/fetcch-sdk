import Apis from "../utils/api-config";
import axios from "axios";
import { AuthSchema,  } from "../types/auth";
import { Headers } from "../types";

export const _login = async (auth: AuthSchema,headers:Headers): Promise<any[]> => {
    const req = await axios({
        url: Apis.wAuthenticationEndpoint,
        method: 'POST',
        data: auth,
        headers: headers
    })

    const res = await req.data

    return res.data
}