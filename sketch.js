
// The setup function runs once
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
  background(255,255,255);
 	fill(0,20,45)
rect(0,0,150,150)
 	fill(100,20,45)
rect(0,100,150,150)
	fill(20,40,300)
rect(0,200,150,150)
	fill(40,40,40)
rect(0,300,150,150)
	fill(50,400,100)
rect(0,400,150,150)

 	fill(20,200,45)
rect(151,0,150,150)
 	fill(100,0,45)
rect(151,100,150,150)
	fill(20,400,30)
rect(151,200,150,150)
	fill(100,400,40)
rect(151,300,150,150)
	fill(50,40,200)
rect(151,400,150,150)



if (mouseIsPressed)
    ellipse(50, 50, 50, 50);
  else
    ellipse(200, 50, 50, 50);
	
	var randomRed = random(0,255);
	var randomGreen = random(0,255);
	var randomBlue = random(0,255);
	var newColor=color(randomRed,randomGreen,randomBlue);
	fill(newColor);
rect(0,500,150,150);

  print(mouseIsPressed);
}
