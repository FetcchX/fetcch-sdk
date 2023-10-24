import Apis from "../utils/api_config";
import axios from "axios";

export const getIdentity = async (id: string): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wGetIdentityEndpoint}?id=${id}`,
        method: "GET",
        params: {
            id
        },
        headers: {
        //     ...headers,
        }
    })

    const res = await req.data

    return res.data
}