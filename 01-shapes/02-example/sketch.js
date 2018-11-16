var w;
var columns;
var rows;
var board;
var next;

var errorLog = 0;

var phi = 1.61803;
var theta;

// Color palette:
// http://paletton.com/#uid=33o0u0klllli7wIjJqNmXfTozar

function setup() {
  c = createCanvas(650, 400); // Set your canvas width, height
  noStroke();
  // Set rotation equal to PI/4 (45 degrees)
  theta = PI/4;

  // Number of tiles (across and down) within your canvas
  var N_ACROSS = 8;

  w = width/N_ACROSS;

  columns = floor(width/w);
  rows = floor(height/w);
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
      // push();
      //   stroke(0);
      //   // noStroke();
      //   noFill();
      //   rect(i*w, j*w, w-1, w-1);
      // pop();

      // Create circle that encloses square
      push();
        translate(tileCenter.x, tileCenter.y);

        fill(255, 130, 111);
        noStroke();

        // ellipse(0, 0, sqrt(2) * rw);
        rectMode(CENTER);
        rotate(PI/4);
        rect(0, 0, w/sqrt(2), w/sqrt(2));
      pop();

      // Dot in tile center
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);
        rotate(PI/4);
        fill(0);
        // noStroke();
        // rect(0, 0, rw, rw);
        // ellipse(0, 0, 5);
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
