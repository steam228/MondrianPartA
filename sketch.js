function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180, 145, 0);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
