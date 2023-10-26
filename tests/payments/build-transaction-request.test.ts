import Fetcch from "../../src";

describe("module: build-transaction", () => {
    const fetcch = new Fetcch("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5")
    
    test("builds a transaction for same-chain evm blockchain", async () => {
        const transactions = await fetcch.payments.buildTransaction([
            {
                "type": "PAYMENT",
                "data": {
                    "token": "0x1::aptos_coin::AptosCoin",
                    "chain": 8,
                    "receiver": "0xa15ab18db956282ffc0c3d687818f9d27e097c7b44c3f4276642154708632fee",
                    "amount": {
                        "amount": "10000000",
                        "currency": "CRYPTO"
                    },
                    "payer": "0xa15ab18db956282ffc0c3d687818f9d27e097c7b44c3f4276642154708632fee",
                    "fromToken": "0x1::aptos_coin::AptosCoin",
                    "fromChain": 8
                }
            }
        ])
        console.log(transactions)
        // expect(transactions.length).to
    })
})