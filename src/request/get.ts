import axios from "axios"
import Apis from "../utils/api_config"

export const getPendingRequests = async (id: string, token: string): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wPaymentRequestEndpoint}?id=${id}`,
        method: "GET",
      
        headers: {
        //     ...headers,
       
        }
    })

    const res = await req.data

    return res.data
}
