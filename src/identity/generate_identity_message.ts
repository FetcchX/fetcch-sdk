import axios from "axios";
import Apis from "../utils/api_config";
import {generateIdentityMessageSchema} from "../types/identity";

export const generateIdentityMessage = async (data: generateIdentityMessageSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wIdentityGenerateMessageEndpoint,
        method: "POST",
       
        headers: {
            // ...headers,
        },
        data
    })

    const res = await req.data

    return res.data
}