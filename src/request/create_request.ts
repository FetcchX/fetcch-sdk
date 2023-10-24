import { promises } from "readline"
import { Request } from "../types/request"
import Apis from "../utils/api_config"
import axios from "axios"

export const CreateRequest = async (body: Request): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestEndpoint,
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

