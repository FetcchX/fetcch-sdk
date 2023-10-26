import axios from "axios";
import Apis from "../utils/api_config";
import { generateIdentityMessageSchema } from "../types/identity";
import { getSecretKey } from "..";

export const generateMessage = async (data: generateIdentityMessageSchema): Promise<any[]> => {

    const req = await axios({
        url: Apis.wIdentityGenerateMessageEndpoint,
        method: "POST",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data;
    return res.data;
}