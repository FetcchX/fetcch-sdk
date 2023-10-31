import Fetcch from "../../src";

describe("module: authentication", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("authenticate user", async () => {
        const auth = await fetcch.auth.login(
            {
                "owner": "fujh@pay",
                "signature": "0x9c911aed19f21d89059b34b54b09d11a950bce5aaf44419cdaeca56f16c8a5ba47f2bacf57fa21fdec6cb8d8f77ef01e82dd63b80fb35fd0392acaf00a5891fc1c",
                "smartWallet": {
                    "isSmartContractWallet": false,
                    "chain": 2
                },
                "timestamp": 1698748280
            });
        console.log(auth);
        expect(auth).toBeDefined();
    });
});