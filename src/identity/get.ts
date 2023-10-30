import Apis from "../utils/api-config";
import axios from "axios";
import { Headers } from '../types';

export const _get = async (id: string, headers: Headers): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wGetIdentityEndpoint}?id=${id}`,
        method: "GET",
        headers: headers
    })

    const res = await req.data

    return res.data
}