import axios from "axios";
import Apis from "../utils/api_config";

export const getCircles = async (owner: string): Promise<any[]> => {
    const req = await axios({
        url: `${Apis.wAddressBookEndpoint}?owner=${owner}`,
        method: "GET",
        headers: {
        //     ...headers,
        }
    })

    const res = await req.data

    return res.data
};