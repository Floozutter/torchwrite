import { lightClamp, lightWrap } from "light";
import { describe, it, expect } from "@jest/globals";

describe(lightClamp.name, () => {
    it("clamps values less than 0 to 0", () => {
        expect(lightClamp(-Number.EPSILON)).toBe(0);
        expect(lightClamp(-1)).toBe(0);
        expect(lightClamp(Number.MIN_SAFE_INTEGER)).toBe(0);
        expect(lightClamp(-Infinity)).toBe(0);
    });
    it("prevents NaN propagation by returning 0", () => {
        expect(lightClamp(NaN)).toBe(0);
    });
});

describe(lightWrap.name, () => {
    it("prevents exception propagation by returning 0", () => {
        expect(lightWrap((_x, _z) => { throw new Error(); })(NaN, NaN)).toBe(0);
    });
});
