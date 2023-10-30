import axios from "axios";
import Apis from "../utils/api-config";
import {IdentityIntent} from "../types/identity";
import { Headers } from "../types";

export const _create = async (data: IdentityIntent, headers:Headers): Promise<any[]> => {
    const req = await axios({
        url: Apis.wGetIdentityEndpoint,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
}