import axios from "axios";
import Apis from "../utils/api-config";
import { getSecretKey } from "..";

export const generateMessage = async (owner:string): Promise<any[]> => {
    const data = {
        "owner": owner
    };
    
    const req = await axios({
        url: Apis.wGenerateAuthenticationMessageEndpoint,
        method: 'POST',
        headers: {
            'secret-key': getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}