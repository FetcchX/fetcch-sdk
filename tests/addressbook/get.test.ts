import Fetcch from "../../src";

describe("module: get-addressbook", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZ1amhAcGF5IiwiaWF0IjoxNjk4ODI0MjI4LCJleHAiOjE2OTg4MjYwMjh9.OgXdK36DdOECnjfFbbkvHRV8rAzE-2uEi1DrYvsB5Oc");
    test("get addressbook of the user", async () => {
        const addressbook = await fetcch.addressBook.get("fujh@pay");
        expect(addressbook).toBeDefined();
    });
});