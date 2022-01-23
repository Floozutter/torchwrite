import { lightClamp, lightWrap } from "light";
import { describe, it, expect } from "@jest/globals";

describe(lightClamp.name, () => {
    it("prevents NaN propagation", () => {
        expect(lightClamp(NaN)).not.toBe(NaN);
    });
});

describe(lightWrap.name, () => {
    it.todo("returns 0 instead of throwing");
});
