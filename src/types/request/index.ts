import { z } from "zod"
import { supportedIntentTypes } from "./request-intent-types"

export const Transaction = z.object({
    tx: z.any(),
    chain: z.number(),
    type: z.enum(["PAYMENT_NATIVE", "PAYMENT_TOKEN", "APPROVE_TOKEN", "OTHER"])
})

export const actionsSchema = z.array(z.union([
    z.object({
        transaction: Transaction,
        executionData: z.object({
            hash: z.string(),
            chain: z.number(),
            timestamp: z.number(),
            dstHash: z.string().optional(),
            dstChain: z.number().optional()
        }).optional()
    }),
    z.object({
        type: z.enum(["PAYMENT"]),
        data: supportedIntentTypes,
        executionData: z.object({
            hash: z.string(),
            chain: z.number(),
            timestamp: z.number(),
            dstHash: z.string().optional(),
            dstChain: z.number().optional()
        }).optional()
    })
]))

export const updateRequestSchema = z.object({
    id: z.number(),
    actions: actionsSchema,
});

export const requestSchema = z.object({
    id: z.number(),
    payer: z.string(),
    receiver: z.string(),
    actions: actionsSchema,
    label: z.string(),
    message: z.string(),
    signature: z.string().optional(),
    executedAt: z.date(),
    requestedAt: z.date()
})

export const MessageSchema = z.object({
    payer: z.string(),
    receiver: z.string(),
    actions: actionsSchema,
    message: z.string(),
    label: z.string(),
})

export const createRequestSchema = z.object({
    payer: z.string(),
    receiver: z.string(),
    actions: actionsSchema,
    message: z.string(),
    label: z.string(),
    signature: z.string()
})
export type PaymentRequest = z.input<typeof requestSchema>
export type CreateRequest = z.input<typeof createRequestSchema>
export type Actions = z.input<typeof actionsSchema>
export type UpdateRequest = z.input<typeof updateRequestSchema>
export type GenerateMessage = z.input<typeof MessageSchema>

export * from "./request-intent-types"