import axios from "axios";
import Apis from "../utils/api-config";
import { UpdateRequest } from "../types/request";
import { Headers } from "../types";

export const _update = async (body: UpdateRequest, headers: Headers): Promise<any[]> => {
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