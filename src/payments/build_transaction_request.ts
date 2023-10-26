import {getSecretKey} from '..';
import axios from 'axios';
import Apis from '../utils/api_config';
import { Actions } from '../types/request';

export const build = async (data: Actions): Promise<any[]> => {
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