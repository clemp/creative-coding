var w;
var columns;
var rows;

var errorLog = 0;

var thetaSlider;
var thetaSliderIncrease;

// Color palette:
// http://paletton.com/#uid=33o0u0klllli7wIjJqNmXfTozar

function setup() {
  c = createCanvas(650, 400); // Set your canvas width, height

  // Build controls
  thetaSlider = createSlider(PI/6, PI, PI/6);
  noStroke();
  // Set rotation equal to PI/4 (45 degrees)
  theta = PI/4;

  // Number of tiles (across and down) within your canvas
  var N_ACROSS = 2;

  w = width/N_ACROSS;

  columns = floor(width/w);
  rows = floor(height/w);

  // lp = new LinePair(60, 0, 160, 3*PI/4);
  // lp1 = new LinePair(0, 60, 160, 3*PI/4);

  lp = new LinePair(60, 0, 160);
  lp1 = new LinePair(0, 60, 160);

}

function draw() {
  background(255);

  // Create grid (each row in a column gets created before moving to the next column)
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {

      // Capture the tile centerpoint in an (x, y) p5.Vector object
      var tileCenter = createVector(i*w + w/2, j*w + w/2);

      // Geometry

      // Set variables to help design your inside shape

      // Draw tile borders
      push();
        stroke(0);
        // noStroke();
        noFill();
        rect(i*w, j*w, w-1, w-1);
      pop();

      // Create circle that encloses square
      push();
        translate(tileCenter.x, tileCenter.y);

        fill(255, 130, 111);
        // noStroke();

        // ellipse(0, 0, sqrt(2) * rw);
        // rectMode(CENTER);
        // rotate(PI/4);
        // rect(0, 0, w/sqrt(2), w/sqrt(2));
        // stroke(0);
        // line(0, 0, 50, 0);

        // rotate(3*PI/4);
        // line(0, 0, 50, 0);
        ellipse(0, 0, 120);
        stroke(0);
        // line(0, 0, 60, 0);
        push();
          translate(60, 60);
          rotate(-PI/2);
          lp.draw(thetaSlider.value());
        pop();
        lp1.draw(thetaSlider.value());
      pop();

      // Dot in tile center
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);
        rotate(PI/4);
        fill(0);
        // noStroke();
        ellipse(0, 0, 5);
      pop();

      // Help yourself with by printing some variables to the console log
      if (errorLog < 3) {
        console.log("tileCenter.x: ", tileCenter.x, " tileCenter.y: ", tileCenter.y);
        console.log("w/2: ", w/2);
        errorLog += 1;
      }
    }
  }
}

function LinePair(x, y, l) {
  this.draw = function(theta) {
    push();
      translate(x, y);
      stroke(0);
      line(0, 0, l, 0);
      rotate(theta);
      line(0, 0, l, 0);
    pop();
  }
}
