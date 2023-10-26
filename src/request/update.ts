import axios from "axios";
import Apis from "../utils/api-config";
import { UpdateRequestSchema } from "../types/request";
import { Headers } from "../types";

export const _update = async (body: UpdateRequestSchema, headers: Headers): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestEndpoint,
        method: "PATCH",
        params: {
            body
        },
        headers:headers
    })

    const res = await req.data

    return res.data
}