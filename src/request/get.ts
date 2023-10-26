import axios from "axios"
import Apis from "../utils/api-config"
import { getSecretKey } from ".."

export const get = async (id: string): Promise<any[]> => {
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
