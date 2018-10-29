var w;
var columns;
var rows;
var board;
var next;

var errorLog = 0;

var phi = 1.61803;
var theta;

var colors = [];


// Color palette:
// http://paletton.com/#uid=33o0u0klllli7wIjJqNmXfTozar

function setup() {
  c = createCanvas(650, 400); // Set your canvas width, height

  colors[0] = color(41, 82,109); // green
  colors[1] = color(51, 54,118); // indigo
  colors[2] = color(170,140, 57); // gold
  colors[3] = color(77,130,165); // siena

  noStroke();
  // Set rotation equal to PI/4 (45 degrees)
  theta = PI/4;

  // Number of tiles (across and down) within your canvas
  var N_ACROSS = 12;

  w = width/N_ACROSS;

  columns = floor(width/w);
  rows = floor(height/w);
}

function draw() {
  background(colors[0]);

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
      // push();
      //   // stroke(0);
      //   // noStroke();
      //   noFill();
      //   rect(i*w, j*w, w-1, w-1);
      // pop();

      // Create circle that encloses square
      push();
        translate(tileCenter.x, tileCenter.y);

        fill(colors[3]);
        noStroke();

        ellipse(0, 0, sqrt(2) * rw);
      pop();

      // Create first square in center of tile
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);

        fill(colors[1]);
        // noStroke();

        rect(0, 0, rw, rw);
        ellipse(0, 0, rw);
        line(0, 0, r, 0);
        line(0, 0, 0, r);
      pop();

      // Create point that sits where the square forms a right angle
      push();
        translate(tileCenter.x, tileCenter.y);

        var px = sqrt(2) * r * cos(theta);
        var py = sqrt(2) * r * sin(theta);

        ellipse(i*w, j*w, 1);
      pop();

      // Duplicate first square and rotate PI/4 (45) degrees
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);
        rotate(theta);

        fill(colors[1]);
        // noStroke();

        rect(0, 0, rw, rw);
      pop();

      // Create circle that sits within inner rectangles
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);

        fill(colors[0]);

        ellipse(0, 0, rw);
      pop();

      // Inscribe four inner circles
      push();
        translate(tileCenter.x, tileCenter.y);

        // Four circles inner fill
        noStroke();
        fill(colors[3]);

        rotate(0);
        ellipse(0, r/2, r);

        rotate(PI/2);
        ellipse(0, r/2, r);

        rotate(PI);
        ellipse(0, r/2, r);

        rotate(3*PI/2);
        ellipse(0, r/2, r);

        // Four circles outer stroke
        noFill();
        stroke(colors[2]);
        strokeWeight(2);

        rotate(0);
        ellipse(0, r/2, r);

        rotate(PI/2);
        ellipse(0, r/2, r);

        rotate(PI);
        ellipse(0, r/2, r);

        rotate(3*PI/2);
        ellipse(0, r/2, r);
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

        // Create point that sits where the square forms a right angle
        var px = sqrt(2) * r * cos(theta);
        var py = sqrt(2) * r * sin(theta);
        // line(0, 0, px, py);
        // fill(255, 0, 255, 25);
        // line(0, 0, px, py);
        // ellipse(px, py, 5);
      pop();



      // Help yourself with by printing some variables to the console log
      if (errorLog < 3) {
        console.log("tileCenter.x: ", tileCenter.x, " tileCenter.y: ", tileCenter.y);
        console.log("r: ", r);
        console.log("rw: ", rw);
        console.log("rw * (1 + sqrt(2)): ", rw * (1 + sqrt(2)));
        console.log("w/2: ", w/2);
        console.log("theta: ", theta, " PI/4: ", PI/4);
        console.log("rw/2: ", rw/2, ", px: ", px);
        errorLog += 1;
      }
    }
  }
}
