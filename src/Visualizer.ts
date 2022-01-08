export class Visualizer {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
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
    }
}
