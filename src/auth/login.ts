import Apis from "../utils/api-config";
import axios from "axios";
import { AuthSchema } from "../types/auth";

export const login = async (auth: AuthSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wAuthenticationEndpoint,
        method: 'POST',
        data: auth
    })

    const res = await req.data

    return res.data
}