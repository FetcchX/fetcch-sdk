import {z} from 'zod';

export const payerConfig = z.object({
    address:z.string(),
    id:z.string(),
    chain:z.number(),
    token:z.string(),
    amount:z.object({
        amount:z.string(),
        type:z.string(),
    }),
});

export const receiverConfig = z.object({
    id:z.string(),
    address:z.string(),
    chain:z.string(),
});

export const crosschainConfig = z.object({
    payer:z.string(),
    payerConfig:payerConfig,
    receiverConfig:receiverConfig,
    type:z.string(),
});

