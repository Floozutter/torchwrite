import { lightClamp, lightWrap } from "light";
import { describe, it, expect } from "@jest/globals";

describe(lightClamp.name, () => {
    it("prevents NaN propagation", () => {
        expect(lightClamp(NaN)).not.toBe(NaN);
    });
});

describe(lightWrap.name, () => {
    it("prevents exception propagation by returning 0", () => {
        expect(lightWrap((_x, _z) => { throw new Error(); })(NaN, NaN)).toBe(0);
    });
});
