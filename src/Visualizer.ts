import { LightSourcePattern } from "LightSourcePattern";

export class Visualizer {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private sources: LightSourcePattern;

    constructor(
        canvas: HTMLCanvasElement,
        sources: LightSourcePattern = (_x, _z) => 0,
    ) {
        // initialize canvas and context
        if (!canvas.getContext) {
            throw Error("canvas not supported");
        }
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        if (ctx === null) {
            throw Error("no drawing context");
        }
        this.ctx = ctx;
        // initialize sources
        this.sources = sources
    }
}
