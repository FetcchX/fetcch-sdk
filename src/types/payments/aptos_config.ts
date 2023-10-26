import {z} from 'zod';

const dataConfig = z.object({
    token:z.string(),
    chain:z.number(),
    receiver:z.string(),
    amount:z.object({
        amount:z.string(),
        currency:z.enum(["USD","INR","CRYPTO"]),
    }),
    payer:z.string(),
    fromToken:z.string(),
    fromChain:z.number(),
    });

export const aptosConfig = z.object({
    actions:z.array(z.object({
        type:z.string(),
        data:dataConfig,
    })),
});

