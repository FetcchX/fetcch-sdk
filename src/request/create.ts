import { PaymentRequest } from "../types/request"
import Apis from "../utils/api-config"
import axios from "axios"
import { Headers } from "../types"

export const _create = async (data: PaymentRequest, headers: Headers): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestEndpoint,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
}

