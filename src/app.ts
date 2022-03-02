import * as p5 from "p5"
import "./styles.scss"

let winW: number;
let winH: number;

// Creating the sketch itself
const sketch = (p5: p5) => {

	// The sketch setup method 
	p5.setup = () => {
        // Variable Declaration
        winW = p5.windowWidth - 100;
        winH = p5.windowHeight - 100;

		// Creating and positioning the canvas
		const canvas = p5.createCanvas(winW, winH);
		canvas.parent("app");

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