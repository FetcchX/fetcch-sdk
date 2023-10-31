import Fetcch from "../../src";

describe("module: create-request", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("create payment request", async () => {
        const request = await fetcch.request.create(
            {
                "payer": "0xF93480Eb81e7Ff26A5b79d2D610B8648f645b950",
                "receiver": "lolx@pay",
                "actions": [
                    {
                        "transaction": {
                            "tx": "",
                            "chain": 1,
                            "type": "OTHER"
                        }
                    },
                    {
                        "type": "PAYMENT",
                        "data": {
                            "token": "0x9E4b05Ecb50c6dA9a2ad94BEa70Baf4927F4F77d",
                            "chain": 1,
                            "receiver": "0xF93480Eb81e7Ff26A5b79d2D610B8648f645b950",
                            "amount": {
                                "amount": "100",
                                "currency": "CRYPTO"
                            }
                        }
                    }
                ],
                "message": "YOYO",
                "label": "123",
                "signature": "0x000000000000000000000000000000f9ee1842bb72f6bbdd75e6d3d4e3e9594c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000044088924ef0000000000000000000000009e4b05ecb50c6da9a2ad94bea70baf4927f4f77d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004137deba9e7f1d4b37a473cbf958d791a4edb98e215455b3799bc3c8e6d11441062a4cd544cce591799975158bceaa2d460d2b4c0f03cbaa7aa9898306e5f4873b1b000000000000000000000000000000000000000000000000000000000000006492649264926492649264926492649264926492649264926492649264926492"
            }
        );
        expect(request).toBeDefined();
    });
});

