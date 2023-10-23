import { z } from "zod"

export const paymentIntent = z.object({
    token: z.string(),
    chain: z.number(),
    receiver: z.string(),
    amount: z.object({
        amount: z.string(),
        currency: z.enum(["USD", "INR", "CRYPTO"])
    }),
})

export const nftIntent = z.object({
    token: z.string(),
    tokenId: z.string(),
    chain: z.number(),
    receiver: z.string(),
    sender: z.string()
})

export const supportedIntentTypes = z.union([
    paymentIntent,
    nftIntent
])

export type SupportedIntentTypes = z.infer<typeof supportedIntentTypes>
export type PaymentIntent = z.infer<typeof paymentIntent>
export type NFTIntent = z.infer<typeof nftIntent>