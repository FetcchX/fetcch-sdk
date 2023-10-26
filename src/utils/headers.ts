import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const commonHeaders:AxiosRequestConfig  = {
    headers: {
    }
};

export function initializeSdk(secretKey: string) {
    if (commonHeaders.headers) {
        commonHeaders.headers['secret-key'] = secretKey;
    } else {
        commonHeaders.headers = { 'secret-key': secretKey };
    }
}


export default commonHeaders;


