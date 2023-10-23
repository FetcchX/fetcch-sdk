import { z } from "zod"
import { paymentIntent } from "./request-intent-types"


export const Transaction = z.object({
    tx: z.any(),
    chain: z.number(),
    type: z.enum(["PAYMENT_NATIVE", "PAYMENT_TOKEN", "APPROVE_TOKEN", "OTHER"])
})

export const requestSchema = z.object({
   payer: z.string(),
   receiver: z.string(),
   actios: z.array(
    z.object({
        transaction: Transaction,
    }),
    z.object({
        type:z.string(),
        data:paymentIntent
    }),
   ),
   message:z.string(),
   label:z.string(),
   signature:z.string(),
})

export type Request = z.infer<typeof requestSchema>
export * from "./request-intent-types"