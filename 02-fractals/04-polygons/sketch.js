var scaleFactor = 0.5;
var alphaValue = 10;
var scaleSlider;
var alphaSlider;

function setup() {
  createCanvas(600, 600);
  scaleSlider = createSlider(0.3, 0.8, 0.3, 0.01);
  alphaSlider = createSlider(0, 255, 10, 1);

}

function draw() {
  background(51);
  // angle = slider.value();
  stroke(255);
  // translate(200, height);
  // branch(100);
  polygon(width/2, height/2, 150, 6);

}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI/npoints;

  // Draw initial shape
  // Using scaleFactor to determine radius size of generations
  scaleFactor = scaleSlider.value();
  alphaValue = alphaSlider.value()
  fill(255, alphaValue);

  beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
  endShape(CLOSE);

  // Draw recursive shapes
  // with an exit condition!
  if (radius > 10) {
    push();
      translate(x, y);
      rotate(PI/4);
      polygon(radius, 0, radius * scaleFactor, npoints);
      polygon(0, radius, radius * scaleFactor, npoints);
      polygon(0, -radius, radius * scaleFactor, npoints);
      polygon(-radius, 0, radius * scaleFactor, npoints);
    pop();
  }

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}
