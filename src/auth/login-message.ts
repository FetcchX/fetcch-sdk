import axios from "axios";
import Apis from "../utils/api-config";
import { Headers } from '../types';

export const _generateMessage = async (owner:string,headers: Headers): Promise<any[]> => {
    const data = {
        "owner": owner
    };
    
    const req = await axios({
        url: Apis.wGenerateAuthenticationMessageEndpoint,
        method: 'POST',
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
}