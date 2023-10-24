import { UpdateRequestSchema } from "../types";
import axios from "axios";
import Apis from "../utils/api_config";

export const UpdateRequest = async (body: UpdateRequestSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestEndpoint,
        method: "PATCH",
        params: {
            body
        },
        headers: {
            // ...headers,
        }
    })

    const res = await req.data

    return res.data
}