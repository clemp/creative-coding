let particles = []

function setup() {
  createCanvas(450,450);
  frameRate(34);
  background(51);
  // Particle 1 attributes
  let p1_velocity = new p5.Vector(1, 1);
  let p1_acceleration =new p5.Vector(random(-1,1) * 0.2, 0.1);
  let p1_position = new p5.Vector(width/2, 100);

  // Particle 2 attributes
  let p2_velocity = new p5.Vector(1, 1);
  let p2_acceleration =new p5.Vector(random(-1,1) * 0.2, 0.1);
  let p2_position = new p5.Vector(width/2 + 50, 100);

  // Add particles to list
  particles.push(new Particle(p1_position, p1_velocity, p1_acceleration));
  particles.push(new Particle(p2_position, p2_velocity, p2_acceleration));
}

function draw() {
  background(51, 40);
  fill(255);
  particles[0].update();
  particles[0].show();
  particles[1].update();
  particles[1].show();
}
