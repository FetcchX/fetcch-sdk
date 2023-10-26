import { MessageSchema } from "../types";
import axios from "axios";
import Apis from "../utils/api_config";
import { getSecretKey } from "..";

export const generateMessage = async (data: MessageSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestGenerateMessageEndpoint,
        method: "POST",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}