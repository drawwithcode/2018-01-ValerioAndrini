let = angle = 140;

function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(1);
	angleMode(DEGREES);
}

function draw() {
	background(204);
	fill(0, 160, 0);
	//Neck
	line(250, 285, 250, 345);

	//Wheel
	ellipseMode(CENTER);

	ellipse(250, 465, 70, 70);

	//Body
	rectMode(CORNER);
	rect(200, 325, 100, 140);

	//Ears
	line(215, 215, 235, 235);
	line(265, 235, 285, 215);
	ellipse(215, 215, 10);
	ellipse(285, 215, 10);


	//Head
	ellipseMode(CENTER);
	ellipse(250, 270, 90, 90);
	fill(255,255,255);
	arc(250, 285, 40, 25, 360, 180);

	//Eyes
	ellipseMode(CENTER);
	fill(255, 255, 255);

	ellipse(265, 260, 10);
	//ellipse(235, 260, 10);
	line(230, 260, 240, 260);

	//Glasses
	line(255, 260, 245, 260);
	rectMode(CENTER);
	fill(255, 255, 255, 100);
	rect(265, 260, 25, 25);

	rectMode(CENTER);
	fill(255, 255, 255, 100);
	rect(235, 260, 25, 25);



	//Arms
	fill(0, 160, 0);
	ellipseMode(CORNER);
	ellipse(300, 340, 30, 120);


	translate(210, 335);
	rotate(angle);
	ellipseMode(CORNER);
	ellipse(0, 0, 30, 120);




}
