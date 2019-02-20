// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU
// https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_014_FractalTree/P5/sketch.js
var scaleFactor = 0.5;
var alphaValue = 10;
var scaleSlider;
var alphaSlider;

function setup() {
  createCanvas(600, 600);
  scaleSlider = createSlider(0.3, 0.8, 0.5, 0.01);
  alphaSlider = createSlider(0, 100, 10, 1);

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
  // noFill();

  // fill(255);

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
      polygon(radius, 0, radius * scaleFactor, 6);
      polygon(0, radius, radius * scaleFactor, 6);
      polygon(0, -radius, radius * scaleFactor, 6);
      polygon(-radius, 0, radius * scaleFactor, 6);
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
