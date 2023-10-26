import { z } from 'zod';

export const addresses = z.object({
    address: z.string(),
    name: z.string(),
    chainType: z.string(),
});

export const addressBookIdentity = z.object({
    addressBookIdentity: z.string(),
    name: z.string(),
});

export const addressbookGenerateMessage = z.object({
    id: z.string(),
    name: z.string(),
    addresses: z.array(addresses).optional(),
    identities: z.array(addressBookIdentity).optional(),
    owner: z.string(),
});


export const addressbookSchema = z.object({
    name: z.string(),
    addresses: z.array(addresses).optional(),
    identities: z.array(addressBookIdentity).optional(),
    owner: z.string(),
    signature: z.string(),
});

export const updateAddressbookSchema = z.object({
    id: z.string(),
    name: z.string(),
    addresses: z.array(addresses).optional(),
    identities: z.array(addressBookIdentity).optional(),
    owner: z.string(),
    signature: z.string(),
});

export type addressbookMessageSchema = z.infer<typeof addressbookGenerateMessage>;
export type addressbookSchemaType = z.infer<typeof addressbookSchema>;
export type updateAddressbookSchemaType = z.infer<typeof updateAddressbookSchema>;