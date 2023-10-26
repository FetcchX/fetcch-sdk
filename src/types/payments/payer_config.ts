import {z} from 'zod';

export const payerConfig = z.object({
    payer:z.string(),
    address:z.string(),
    token:z.string(),
    chain:z.number(),
    amount:z.string(),
});

export type PayerConfig = z.infer<typeof payerConfig>;
