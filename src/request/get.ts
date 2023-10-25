import axios from "axios"
import Apis from "../utils/api_config"
import { getSecretKey } from ".."

export const getPendingRequests = async (id: string): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wPaymentRequestEndpoint}?id=${id}`,
        method: "GET", 
        headers: {
            "secret-key": getSecretKey()
        }
    })

    const res = await req.data

    return res.data
}
