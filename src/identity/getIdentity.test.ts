import { expect, test } from "vitest"
import {getIdentity} from "./get";

test("getIdentity", async () => {
    const identity = await getIdentity("v@pay");
    expect(identity).toBeDefined();
});