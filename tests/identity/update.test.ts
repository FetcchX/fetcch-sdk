import Fetcch from "../../src";

describe("module: update-identity", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("update identity", async () => {
        const identity = await fetcch.identity.update({
            "id": "satyam@fetcch",
            "identifier": "satyam",
            "provider": "fetcch",
            "default": {
                "address": "0x1DCcc9BaF7E8d7A18f948acD467CE016044fC546",
                "chain": 1,
                "isMultisig": false,
                "isSmartContractWallet": false
            },
            "secondary": [
                {
                    "address": "0x1DCcc9BaF7E8d7A18f948acD467CE016044fC546",
                    "chain": 6,
                    "isMultisig": false,
                    "isSmartContractWallet": false
                }
            ],
            "version": 10,
            "currentSignature": "0x749a8ea740e62243c9805e16bde36a672fd75e8b9a5fd39942f6930e7fef1a297d80c57305e6722c6ffc1d201c7b37e15d0257b3b0c2a44f784b139c50b3d2f11c",
            "previousSignature": "0x749a8ea740e62243c9805e16bde36a672fd75e8b9a5fd39942f6930e7fef1a297d80c57305e6722c6ffc1d201c7b37e15d0257b3b0c2a44f784b139c50b3d2f11c"
        });
        console.log(identity);
        expect(identity).toBeDefined();
    }
    );
});