import Fetcch from "../../src";

describe("module: sign-ethereum-message", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("sign ethereum message", async () => {
        const signature = await fetcch.sign.signEthereurmMessage(
            "fujh@pay",
            "c36c3587ae76d32737cb441334c5ac858d0fc906b329ba9fc6998e090625b60d",
        );
        console.log("signaturee", signature);
        expect(signature).toBeDefined();
    });
});