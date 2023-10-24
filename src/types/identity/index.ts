import {z} from "zod";

export const addressConfig = z.object({
    address: z.string(),
    chain: z.number(),
    isMultisig: z.boolean(),
    isSmartContractWallet: z.boolean(),
});

export const identity = z.object({
    id: z.string(),
    identifier: z.string(),
    provider: z.string(),
    default: addressConfig,
    secondary: z.array(addressConfig).optional(),
    currentSignature:z.string(),
    extraData:z.object({
        signer:z.string(),
    }).optional(),
});

export const generateMessage = z.object({
    id: z.string(),
    identifier: z.string(),
    provider: z.string(),
    default: addressConfig,
    secondary: z.array(addressConfig).optional(),
});

export type generateIdentityMessageSchema = z.infer<typeof generateMessage>;
export type identitySchema = z.infer<typeof identity>;