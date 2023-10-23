import axios from "axios"
import Apis from "../utils/api_config"
import headers from "../utils/headers"

export const getPendingRequests = async (payer: string, token: string): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestEndpoint,
        method: "GET",
        params: {
            payer
        },
        // headers: {
        //     ...headers,
        //     "Authorization": `Bearer ${token}`
        // }
    })

    const res = await req.data

    return res.data
}
