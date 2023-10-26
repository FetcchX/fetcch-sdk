import { getSecretKey } from ".."
import { Request } from "../types/request"
import Apis from "../utils/api_config"
import axios from "axios"

export const createRequest = async (data: Request): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestEndpoint,
        method: "POST",
        headers: {
            "secret-key":getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}

