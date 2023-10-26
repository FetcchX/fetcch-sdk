import { AptosSchema } from "../types/payments";
import { getSecretKey } from "..";
import axios from "axios";
import Apis from "../utils/api_config";

export const buildAptosTransaction = async (data: AptosSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wBuildTransactionEndpoint,
        method: "POST",
        headers: {
            "secret-key": getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}