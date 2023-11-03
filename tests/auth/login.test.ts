import Fetcch from "../../src";

describe("module: authentication", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("authenticate user", async () => {
        const auth = await fetcch.auth.login(
            {
                "owner": "fujh@pay",
                "signature": "0x69d06443b3e797c5475b73bf56829d3eca411db1d61f6d40e69119e4284739d5087393a485435974fa977c4d2a47bd2d5b30423744ba471a95b218386116203e1b",
                "smartWallet": {
                    "isSmartContractWallet": false,
                    "chain": 2
                },
                "timestamp": 1698824171
            });
        console.log(auth);
        expect(auth).toBeDefined();
    });
});