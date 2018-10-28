var w;
var columns;
var rows;
var board;
var next;

var errorLog = 0;

var phi = 1.61803;
var theta;

function setup() {
  c = createCanvas(480, 480); // Set your canvas width, height

  // Set rotation equal to PI/4 (45 degrees)
  theta = PI/4;

  // Number of tiles (across and down) within your canvas
  var N_ACROSS = 4;

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
      var r = 42;

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

        fill(255, 0, 255);
        noStroke();

        ellipse(0, 0, sqrt(2) * rw);
      pop();

      // Create first square in center of tile
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);

        fill(255, 255, 0);
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

        fill(255, 255, 0);
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
      push();
        translate(tileCenter.x, tileCenter.y);
        rectMode(CENTER);
        rotate(PI/4);
        fill(0);
        // noStroke();
        // rect(0, 0, rw, rw);
        ellipse(0, 0, 5);
      pop();





      // Help yourself with by printing some variables to the console log
      if (errorLog < 3) {
        console.log("tileCenter.x: ", tileCenter.x, " tileCenter.y: ", tileCenter.y);
        console.log("r: ", r);
        console.log("rw: ", rw);
        console.log("rw * (1 + sqrt(2)): ", rw * (1 + sqrt(2)));
        console.log("w/2: ", w/2);
        console.log("theta: ", theta, " PI/4: ", PI/4);



        errorLog += 1;
      }


      // top
      // push();
      //   translate(tileCenter.x, tileCenter.y);
      //   rectMode(CENTER);
      //   rect(0, -r/2, -r/3, r/5);
      // pop();

      // bottom
      // push();
      //   translate(tileCenter.x, tileCenter.y);
      //   rectMode(CENTER);
      //   rect(0, r/2, r/3, r/5);
      // pop();
      //
      // push();
      //   translate(tileCenter.x, tileCenter.y);
      //   rectMode(CENTER);
      //   rect(-r/2, r/2, r/2, r/5);
      // pop();
      //
      // push();
      //   translate(tileCenter.x, tileCenter.y);
      //   rectMode(CENTER);
      //   rect(r/2, r/2, r/2, r/5);
      // pop();








      //
      // fill(255);
      // ellipse(tileCenter.x, tileCenter.y, r, r);


      // ellipse(tileCenter.x - r, tileCenter.y, r, r);
      //
      // push();
      //   translate(tileCenter.x, tileCenter.y);
      //   arc(0, 0, 60, 60, 0, HALF_PI);
      // pop();

      // ellipse(i*w, j*w, r * 2, r * 2);




    }
  }
}
