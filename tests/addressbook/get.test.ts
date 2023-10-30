import Fetcch from "../../src";

describe("module: get-addressbook", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("get addressbook of the user", async () => {
        const addressbook = await fetcch.addressBook.get("v@pay", "token");
        expect(addressbook).toBeDefined();
    });
});