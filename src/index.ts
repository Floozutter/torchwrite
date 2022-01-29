import "index.css";
import { Visualizer } from "Visualizer";
import { evalLightPattern } from "light";

const visualizer = new Visualizer(document.getElementById("visualizer") as HTMLCanvasElement);

const editor = document.getElementById("editor") as HTMLTextAreaElement;
editor.addEventListener("input", (e: Event) => {
    if (!(e instanceof InputEvent && e.target instanceof HTMLTextAreaElement)) { return; }
    console.log(e.target.value);
    try {
        visualizer.setSources(evalLightPattern(e.target.value));
    } catch (err) {
        console.error(err);
    }
});

editor.value = "return x % 16 == 0 && z % 16 == 0 ? 15 : 0;";
editor.dispatchEvent(new InputEvent("input"));
