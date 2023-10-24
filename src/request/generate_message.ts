import { MessageSchema } from "../types";
import axios from "axios";
import Apis from "../utils/api_config";

export const GenerateMessage = async (body: MessageSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestGenerateMessageEndpoint,
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