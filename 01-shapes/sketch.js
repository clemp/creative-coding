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
  c = createCanvas(480, 480); // Set your canvas width, height

  // Set rotation equal to PI/4 (45 degrees)
  theta = PI/4;

  // Number of tiles (across and down) within your canvas
  var N_ACROSS = 6;

  w = width/N_ACROSS;

  columns = floor(width/w);
  rows = floor(height/w);
}

function draw() {
  background(255, 212, 111);

  // Create grid (each row in a column gets created before moving to the next column)
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {

      // Capture the tile centerpoint in an (x, y) p5.Vector object
      var tileCenter = createVector(i*w + w/2, j*w + w/2);

      // Geometry

      // Set variables to help design your inside shape

      // Rectangle width such that diameter of circle is equal to tile width
      var r = w/(2*sqrt(2));

      // Set width of inside square
      var rw = 2 * r;

      // Draw tile borders
      push();
        stroke(0);
        noStroke();
        noFill();
        rect(i*w, j*w, w-1, w-1);
      pop();

      // Create circle that encloses square
      push();
        translate(tileCenter.x, tileCenter.y);

        fill(255, 130, 111);
        noStroke();

        ellipse(0, 0, sqrt(2) * rw);
      pop();

      // Create first square in center of tile
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);

        fill(73, 141, 161);
        noStroke();

        rect(0, 0, rw, rw);
        ellipse(0, 0, rw);
        line(0, 0, r, 0);
        line(0, 0, 0, r);

        // Create point that sits where the square forms a right angle
        var px = sqrt(2) * r * cos(theta);
        var py = sqrt(2) * r * sin(theta);
        line(0, 0, px, py);
        fill(255, 0, 255, 25);
        // line(0, 0, rw, 0);
      pop();

      // Duplicate first square and rotate PI/4 (45) degrees
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);
        rotate(theta);

        fill(73, 141, 161);
        noStroke();

        rect(0, 0, rw, rw);
        ellipse(0, 0, rw);
        // line(0, 0, r, 0);
        // line(0, 0, 0, r);

        // Create point that sits where the square forms a right angle
        var px = sqrt(2) * r * cos(theta);
        var py = sqrt(2) * r * sin(theta);
        // line(0, 0, px, py);
        fill(255, 0, 255, 25);

        // Create circle that encloses square
        // noFill();
        // stroke(0);
        // ellipse(0, 0, sqrt(2) * rw);

      pop();

      // Dot in tile center
      // push();
      //   translate(tileCenter.x, tileCenter.y);
      //   rectMode(CENTER);
      //   rotate(PI/4);
      //   fill(0);
      //   // noStroke();
      //   // rect(0, 0, rw, rw);
      //   ellipse(0, 0, 5);
      // pop();

      // Help yourself with by printing some variables to the console log
      if (errorLog < 3) {
        console.log("tileCenter.x: ", tileCenter.x, " tileCenter.y: ", tileCenter.y);
        console.log("r: ", r);
        console.log("rw: ", rw);
        console.log("rw * (1 + sqrt(2)): ", rw * (1 + sqrt(2)));
        console.log("w/2: ", w/2);
        console.log("r_test: ", r_test);
        console.log("theta: ", theta, " PI/4: ", PI/4);
        console.log("cr: ", cr);
        errorLog += 1;
      }
    }
  }
}
