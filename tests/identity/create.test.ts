import Fetcch from "../../src";

describe("module: create-identity", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");

    test("create identity", async () => {
        const ID = await fetcch.identity.create({
            "id": "fujh@pay",
            "identifier": "fujh",
            "provider": "pay",
            "default": {
                "address": "0x97fcDEe354Ee9494927eAfAfEE283940CD734B85",
                "chain": 2,
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
            "currentSignature": "0xd6532b117a76fa69fc89ace0cec91705e0f13563ffb598f64840b0a1bb275d9d0849345cfe8a8a1ec3e247053db05953a1f242c3fd26067dc19cd0fb3e5451981b",
            "extraData": {
                "signer": "0x97fcDEe354Ee9494927eAfAfEE283940CD734B85"
            }
        });
        expect(ID).toBeDefined();
    })
});