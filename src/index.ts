import "index.css";
import { Visualizer } from "Visualizer";
import { lightWrap } from "light";

const visualizer = new Visualizer(document.getElementById("visualizer") as HTMLCanvasElement);

const editor = document.getElementById("editor") as HTMLTextAreaElement;
editor.addEventListener("input", (e: Event) => {
    if (!(e instanceof InputEvent && e.target instanceof HTMLTextAreaElement)) { return; }
    console.log(e.target.value);
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const f = new Function("x", "z", e.target.value);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visualizer.setSources(lightWrap(f as (x: number, z: number) => any));
});

editor.value = "return x % 16 == 0 && z % 16 == 0 ? 15 : 0;";
editor.dispatchEvent(new InputEvent("input"));
