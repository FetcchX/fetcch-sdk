import axios from "axios";
import Apis from "../utils/api_config";
import { getSecretKey } from "..";
import { BuildPaymentSchema } from "../types/payments";

export const buildDryTransaction = async (data: BuildPaymentSchema): Promise<any[]> => {
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
