import axios from "axios"
import Apis from "../utils/api-config"
import { Headers } from "../types"

export const get = async (id: string, headers: Headers): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wPaymentRequestEndpoint}?id=${id}`,
        method: "GET", 
        headers: headers
    })

    const res = await req.data

    return res.data
}
