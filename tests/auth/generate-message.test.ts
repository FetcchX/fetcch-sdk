import Fetcch from "../../src";

describe("module: generate-message", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("generate message for creating a authentication", async () => {
        const message = await fetcch.auth.generateMessage("v@pay");
        expect(message).toBeDefined();
    });
});
