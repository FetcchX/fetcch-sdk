import Fetcch from "../../src";

describe("module: get-addressbook", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("get addressbook of the user", async () => {
        const addressbook = await fetcch.addressBook.get("fujh@pay", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZ1amhAcGF5IiwiaWF0IjoxNjk4NzQ4NDA0LCJleHAiOjE2OTg3NTAyMDR9.t5nVQszQRPAFWGx1950aqVLjVl8yYqvhJR51gSxWcaU");
        expect(addressbook).toBeDefined();
    });
});