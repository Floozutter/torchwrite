import "index.css";
import { Visualizer } from "Visualizer";

const visualizer = new Visualizer(document.getElementById("visualizer") as HTMLCanvasElement);

const editor = document.getElementById("editor") as HTMLTextAreaElement;
editor.addEventListener("input", (e: Event) => {
    if (!(e instanceof InputEvent && e.target instanceof HTMLTextAreaElement)) { return; }
    console.log(e.target.value);
});
