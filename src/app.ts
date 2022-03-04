import * as p5 from "p5"
import { daysToWeeks, format, getDay, hoursToMilliseconds, parse, startOfDay, startOfToday, } from 'date-fns'
import "./styles.scss"

/* 
Retrieve proper schedule json data for the current date
*/
import rawScheduleData from "../src/schedule.json"
const todaysScheduleData = () => {
	let dayStart = startOfToday();
	
	switch (getDay(dayStart)) {
		case 0: 
		case 6:
			return null;
			break;
		case 1:
			return rawScheduleData.schedule.A;
			break;
		case 2:
		case 4:
			return rawScheduleData.schedule.B;
			break;
		case 3:
		case 5:
			return rawScheduleData.schedule.C;
			break;
	}
}

let test = parse("14:40", "k:mm", Date.now());

console.log(test);

let appDOM: HTMLElement = document.getElementById('app');

// P5 Setup and Drawing
let winW: number;
let winH: number;
let pad: number = 20;
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
		p5.background("#00ff00");

	};
    
    p5.windowResized = () => {
		winW = p5.windowWidth - pad;
        winH = p5.windowHeight - pad;

		p5.resizeCanvas(winW, winH)
    };

	// The sketch draw method
	p5.draw = () => {
		p5.background("#00ff00")
		
	};
};

new p5(sketch);