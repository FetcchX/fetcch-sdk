import { expect, test } from "vitest";
import { initialise } from ".";
import checker from "./init";

test("initialise", async () => {
    initialise("4ff9ecc8-4537-4e2e-950d-0cefbd16f2a5");
    const data =  checker();
    expect(data).toBeDefined();
})