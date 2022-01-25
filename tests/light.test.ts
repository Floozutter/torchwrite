import { lightClamp, lightWrap } from "light";
import { describe, it, expect } from "@jest/globals";

describe(lightClamp.name, () => {
    it("clamps values less than 0 to 0", () => {
        expect(lightClamp(-Number.EPSILON)).toBe(0);
        expect(lightClamp(-1)).toBe(0);
        expect(lightClamp(Number.MIN_SAFE_INTEGER)).toBe(0);
        expect(lightClamp(-Infinity)).toBe(0);
    });
    it("clamps values greater than 15 to 15", () => {
        expect(lightClamp(15+Number.EPSILON)).toBe(15);
        expect(lightClamp(16)).toBe(15);
        expect(lightClamp(Number.MAX_SAFE_INTEGER)).toBe(15);
        expect(lightClamp(Infinity)).toBe(15);
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
