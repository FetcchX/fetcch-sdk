import { z } from "zod"
import { paymentIntent } from "./request-intent-types"


export const Transaction = z.object({
    tx: z.any(),
    chain: z.number(),
    type: z.enum(["PAYMENT_NATIVE", "PAYMENT_TOKEN", "APPROVE_TOKEN", "OTHER"])
})

export const ExecutionData = z.object({
    hash: z.string(),
    chain:z.string(),
    timestamp:z.number(),
});

export const messageSchema = z.object({
    payer: z.string(),
    receiver: z.string(),
    actions: z.array(z.union([
        z.object({
            transaction: Transaction,
        }).optional(),
        z.object({
            executionData:ExecutionData,
        }).optional(),
        z.object({
            type:z.string(),
            data:paymentIntent
        }).optional(),
        z.object({
            executionData:ExecutionData,
        }).optional(),
       ])
       ),
       message:z.string(),
       label:z.string(),
})

export const requestSchema = z.object({
   payer: z.string(),
   receiver: z.string(),
   actios: z.array(z.union([
    z.object({
        transaction: Transaction,
    }).optional(),
    z.object({
        type:z.string(),
        data:paymentIntent
    }).optional(),
   ])
   ),
   message:z.string(),
   label:z.string(),
   signature:z.string(),
})

export type Request = z.infer<typeof requestSchema>
export type MessageSchema = z.infer<typeof messageSchema>
export * from "./request-intent-types"