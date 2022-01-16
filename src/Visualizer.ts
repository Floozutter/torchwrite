import { LightPattern } from "light";

export class Visualizer {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private sources: LightPattern;
    private cfg: VisualizerConfig = Visualizer.defaults;

    static readonly defaults: VisualizerConfig = {
    };

    constructor(
        canvas: HTMLCanvasElement,
        sources: LightPattern = (_x, _z) => 0,
        cfg: Partial<VisualizerConfig> = {},
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
        this.sources = sources;
        // update config
        this.setConfig(cfg);
    }

    setSources(sources: LightPattern) {
        this.sources = sources;
    }

    setConfig(cfg: Partial<VisualizerConfig>) {
        this.cfg = {...this.cfg, ...cfg};
    }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisualizerConfig {
}
