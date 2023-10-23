import axios from "axios"

const BASE_URL = ""
const headers = {} 

// add above variables in common config file

export const getPendingRequests = async (payer: string, token: string): Promise<any[]> => {
    const req = await axios({
        url: `${BASE_URL}/transaction-request`,
        method: "GET",
        params: {
            payer
        },
        headers: {
            ...headers,
            "Authorization": `Bearer ${token}`
        }
    })

    const res = await req.data

    return res.data
}
