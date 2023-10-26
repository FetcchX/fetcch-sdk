import axios from "axios";
import Apis from "../utils/api_config";
import { getSecretKey } from "..";
import { UpdateRequestSchema } from "../types/request";

export const update = async (body: UpdateRequestSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestEndpoint,
        method: "PATCH",
        params: {
            body
        },
        headers: {
            "secret-key": getSecretKey()
        }
    })

    const res = await req.data

    return res.data
}