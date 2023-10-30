import { AxiosError } from "axios";
import Fetcch from "../../src";

describe("module: get-identity", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5")

    test("get identity by a handle", async () => {
        try {
            const ID = await fetcch.identity.get("vpay");
            console.log(ID);
            expect(ID).toBeDefined();

        } catch (error: AxiosError | any) {
            console.log("error", error.response);
            // expect(error).toBeDefined()
        }

    });

});