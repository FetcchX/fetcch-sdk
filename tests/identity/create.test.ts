import Fetcch from "../../src";

describe("module: create-identity", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");

    test("create identity", async () => {
        const ID = await fetcch.identity.create({
            "id": "rk@pay",
            "identifier": "rk",
            "provider": "pay",
            "default": {
                "address": "0x10D98B111bee373Eef82C2ae301C867bB002A312",
                "chain": 1,
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
            ],
            "currentSignature": "0xe5841fc35297d6c278119e88a2c57ebdf2c8810d21299ccfcf76006214ac05516c173a5bb05f6092702c8ecd73d27fcbe8f136b45fadcd82d253b235b3edbc971b",
            "extraData": {
                "signer": "0x10D98B111bee373Eef82C2ae301C867bB002A312"
            }
        });
        expect(ID).toBeDefined();
    })
});