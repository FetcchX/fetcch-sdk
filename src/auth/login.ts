import Apis from "../utils/api-config";
import axios from "axios";
import { Authentication  } from "../types/auth";
import { Headers } from "../types";

export const _login = async (auth: Authentication,headers:Headers): Promise<any[]> => {
    const req = await axios({
        url: Apis.wAuthenticationEndpoint,
        method: 'POST',
        data: auth,
        headers: headers
    })

    const res = await req.data

    return res.data
}