import {z} from 'zod';

 const payerConfig = z.object({
    address:z.string(),
    id:z.string(),
    chain:z.number(),
    token:z.string(),
    amount:z.object({
        amount:z.string(),
        type:z.string(),
    })
});

export const solanaConfig = z.object({
    payer:z.string(),
    payerConfig:payerConfig,
    receiverConfig:z.object({
        id:z.string(),
    }),
    type:z.string(),
});
