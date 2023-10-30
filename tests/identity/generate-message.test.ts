import Fetcch from "../../src";

describe("module: generate-message", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5")
    test("generate message for creating a identity", async () => {
        const message = await fetcch.identity.generateMessage(
            {
                "id": "rk@pay",
                "identifier": "rk",
                "provider": "pay",
                "default": {
                    "address": "0x10D98B111bee373Eef82C2ae301C867bB002A312",
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
            }       
        )
        console.log(message);
        expect(message).toBeDefined();
    });
});