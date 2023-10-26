import axios from "axios";
import Apis from "../utils/api-config";
import { Actions } from "../types/request";
import { Headers } from "../types";

export const _buildDryTransaction = async (data: Actions, headers: Headers): Promise<any[]> => {
    const req = await axios({
        url: Apis.wDryBuildTransactionEndpoint,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
}
