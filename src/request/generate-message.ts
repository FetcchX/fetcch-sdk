import { MessageSchema } from '../types/request/index';
import axios from "axios";
import Apis from "../utils/api-config";
import { Headers } from '../types';

export const _generateMessage = async (data: MessageSchema, headers:Headers): Promise<any[]> => {
    const req = await axios({
        url: Apis.wPaymentRequestGenerateMessageEndpoint,
        method: "POST",
        headers: headers,
        data
    })

    const res = await req.data

    return res.data
}