let velocity = new p5.Vector(3, 2);
let acceleration =new p5.Vector(0.3, 0.1);
let position = new p5.Vector(30, 30);

function setup() {
  createCanvas(450,450);
  frameRate(34);
  background(51);
}

function draw() {
  background(51, 40);
  fill(255);
  ellipse(position.x, position.y, 25, 25);
  velocity.add(acceleration);
  position.add(velocity);
}
