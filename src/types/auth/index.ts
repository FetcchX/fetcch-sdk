import {z} from "zod";

export const authSchema = z.object({
    owner: z.string(),
    signature: z.string(),
    smartWallet:z.object({
        isSmartContractWallet: z.boolean(),
        chain: z.number(),
    }),
    timestamp: z.number(),
});

export type AuthSchema = z.infer<typeof authSchema>