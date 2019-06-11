let systems = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30);
  background(0);
}

function draw() {
  background(0);
  // fill(255);
  for (i = 0; i < systems.length; i++) {
    systems[i].showOrigin(); // comment/uncomment to show origin center
    systems[i].update();
  }
}

function mousePressed() {
  // let num_particles = int(random(1, 30));
  systems.push(new ParticleSystem(mouseX, mouseY, 100, 2)); // try generating a random number of particles
  systems[systems.length - 1].generate();
}

// press "s" key to save an image
function keyTyped() {
  if (key == 's') {
    save('particle-systems-04-02-01.png')
  }
}
