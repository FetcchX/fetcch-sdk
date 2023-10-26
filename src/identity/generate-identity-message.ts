import axios from "axios";
import Apis from "../utils/api-config";
import { generateIdentityMessageSchema } from "../types/identity";
import { Headers } from "../types";

export const _generateMessage = async (data: generateIdentityMessageSchema, headers: Headers): Promise<any[]> => {

    const req = await axios({
        url: Apis.wIdentityGenerateMessageEndpoint,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data;
    return res.data;
}