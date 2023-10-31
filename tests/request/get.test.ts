import Fetcch from "../../src";

describe("module: get-request", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("get request by a id", async () => {
        const request = await fetcch.request.get("12");
        expect(request).toBeDefined();
    });
});