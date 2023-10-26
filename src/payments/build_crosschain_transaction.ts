import {CrosschainSchema} from '../types/payments';
import {getSecretKey} from '..';
import axios from 'axios';
import Apis from '../utils/api_config';

export const buildCrosschainTransaction = async (data: CrosschainSchema): Promise<any[]> => {
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