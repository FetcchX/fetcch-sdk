import { z } from "zod";

export const headersSchema = z.object({
    "secret-key": z.string(),
    "content-type": z.string().default("application/json"),
    "Accept": z.string().default("application/json")
})

export type Headers = z.infer<typeof headersSchema>