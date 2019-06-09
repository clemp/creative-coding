let systems = [];

function setup() {
  createCanvas(850,850);
  frameRate(34);
  background(0);
}

function draw() {
  // background(0, 10);
  fill(255);
  for (i = 0; i < systems.length; i++) {
    systems[i].update();
    // systems[i].showOrigin();
    systems[i].showParticles();
  }
}

function mousePressed() {
  systems.push(new ParticleSystem(mouseX, mouseY, 40, 6));
  systems[systems.length - 1].generate();
}
