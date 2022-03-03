import * as p5 from "p5"
import "./styles.scss"

let winW: number;
let winH: number;
let pad: number = 20;

let appDOM: HTMLElement = document.getElementById('app');

// Creating the sketch itself
const sketch = (p5: p5) => {

	// The sketch setup method 
	p5.setup = () => {
        // Variable Declaration
        winW = p5.windowWidth - pad;
        winH = p5.windowHeight - pad;

		// Creating and positioning the canvas
		const canvas = p5.createCanvas(winW, winH);
		canvas.parent(appDOM);

		// Configuring the canvas
		p5.background("black");

	};
    
    p5.windowResized = () => {
        p5.resizeCanvas(winW, winH)
    };

	// The sketch draw method
	p5.draw = () => {

	};
};

new p5(sketch);