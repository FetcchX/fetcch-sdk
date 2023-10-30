import Fetcch from "../../src";

describe("module: generate-message", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    test("generate message for creating a addressbook", async () => {
        const message = await fetcch.addressBook.generateMessage(
            {
                "id": 1,
                "name": "Book 1",
                "addresses": [
                    {
                        "address": "0x123",
                        "name": "Satyam",
                        "chainType": "EVM"
                    }
                ],
                "identities": [
                    {
                        "identity": "satyam@fetcch",
                        "name": "Sataa"
                    }
                ],
                "owner": "satyam@fetcch"
            },
            "Token"
        );
        expect(message).toBeDefined();
    });
});