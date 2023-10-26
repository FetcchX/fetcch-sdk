import axios from "axios";
import Apis from "../utils/api_config";
import { getSecretKey } from "..";
import { Actions } from "../types/request";

export const buildDry = async (data: Actions): Promise<any[]> => {
    const req = await axios({
        url: Apis.wDryBuildTransactionEndpoint,
        method: "POST",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}
