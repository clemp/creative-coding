// Move mouse up and down to create recursive fractal
function setup() {
c = createCanvas(640, 360);
}

function draw() {
  background(25);
  drawCircle(width/2, height/2, 200);
}

function drawCircle(x, y, d) {
  stroke(255);
  noFill();
  ellipse(x, y, d, d);
  rectMode(CENTER);
  var scale = map(mouseY, 0, height, 10, 300)
// exit condition
  if (d > scale) {
    push();
      translate(x, y);
      // rotate(PI/6);
      drawCircle(0+d/2, 0, d/2);
      drawCircle(0-d/2, 0, d/2);
      drawCircle(0, 0+d/2, d/2);
      drawCircle(0, 0-d/2, d/2);


      // drawCircle(x-d/2, y, d/2);
    pop();
  }
}
