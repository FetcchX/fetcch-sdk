import {z} from 'zod';
import { payerConfig } from './payer_config';
import { crosschainConfig } from './crosschain_config';
import { aptosConfig } from './aptos_config';
import { solanaConfig } from './solana_config';

export const buildPaymentSchema = z.object({
    receiver:z.string(),
    payer:payerConfig,
});

export const buildTransactionRequestSchema = z.object({
    transactionRequestId:z.number(),
    payerConfig:payerConfig,
});

export type BuildPaymentSchema = z.infer<typeof buildPaymentSchema>;
export type BuildTransactionRequestSchema = z.infer<typeof buildTransactionRequestSchema>;
export type CrosschainSchema = z.infer<typeof crosschainConfig>;
export type AptosSchema = z.infer<typeof aptosConfig>;
export type SolanaSchema = z.infer<typeof solanaConfig>;