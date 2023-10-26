import { generateIdentityMessage } from "./generate_identity_message";
import { expect, test } from "vitest"

test("generateIdentityMessage", async () => {
    const message = await generateIdentityMessage(
        {
            "id": "satyamx@pay",
            "identifier": "satyamx",
            "provider": "pay",
            "default": {
                "address": "0xeD8A3D22b07C69f3c7D8458B94Ee4F0CE3A790D1",
                "chain": 2,
                "isMultisig": false,
                "isSmartContractWallet": true
            },
            "secondary": [
                {
                    "address": "0x1DCcc9BaF7E8d7A18f948acD467CE016044fC546",
                    "chain": 6,
                    "isMultisig": false,
                    "isSmartContractWallet": false
                }
            ]
        },
    )
    expect(message).toBeDefined()
});