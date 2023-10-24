import axios from "axios";
import Apis from "../utils/api_config";
import {generateIdentityMessageSchema} from "../types/identity";

export const generateIdentityMessage = async (body: generateIdentityMessageSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wIdentityGenerateMessageEndpoint,
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