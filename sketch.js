var BOXES = 30;
var board;

function setup() {
	createCanvas(500,500);
	board = new Board(BOXES);
	frameRate(5);
	board.display();


}

function draw() {
	background(255);
	board.move();
	board.display();

}


function mouseDragged()
{
	fill(255,0,0);
	noStroke();
	ellipse(mouseX,mouseY,10,10);
}


function keyPressed()
{



	if(keyCode === LEFT_ARROW)
	{
		board.travelLeft();
	}

	else if(keyCode === RIGHT_ARROW)
	{
		board.travelRight();
	}

	else if(keyCode === UP_ARROW)
	{
		board.travelUp();
	}

	else if(keyCode === DOWN_ARROW)
	{
		board.travelDown();
	}

	board.display();
}