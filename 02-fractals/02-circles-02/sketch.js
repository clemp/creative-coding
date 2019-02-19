// Move mouse up and down to create recursive fractal
function setup() {
c = createCanvas(640, 360);
}

function draw() {
  background(25);
  drawCircle(width/2, height/2, 300);
}

function drawCircle(x, y, d) {
  stroke(255);
  noFill();
  ellipse(x, y, d, d);

  var scale = map(mouseY, 0, height, 1, 300)
// exit condition
  if (d > scale) {
    drawCircle(x+d/2, y, d/2);
    drawCircle(x-d/2, y, d/2);
  }
}
