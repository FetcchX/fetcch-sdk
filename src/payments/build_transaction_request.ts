import {BuildTransactionRequestSchema} from '../types/payments/index';
import {getSecretKey} from '..';
import axios from 'axios';
import Apis from '../utils/api_config';

export const buildTransactionRequest = async (data: BuildTransactionRequestSchema): Promise<any[]> => {
    const req = await axios({
        url: Apis.wBuildTransactionEndpoint,
        method: 'POST',
        headers: {
            'secret-key': getSecretKey()
        },
        data
    })

    const res = await req.data

    return res.data
}