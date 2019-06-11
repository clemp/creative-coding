class Particle {
  constructor(_position) {
      this.position = _position.copy(); // keep this the same
      // this.velocity = createVector(1, 0); // what happens when you change initial velocity?
      this.velocity = p5.Vector.random2D();
      this.speed = 2; // try different speed
      this.velocity.mult(this.speed); // keep this the same.
      this.acceleration = createVector(0, 0); // keep this the same
      this.mass = 25; // change the mass size
  }
  // Function to apply a new force to the particle.
  applyForce(force) {
    // f = ma -> f/m = a
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    // noStroke();
    stroke(0);

    fill(255); // change this to change particle color
    ellipse(this.position.x, this.position.y, this.mass, this.mass);
    // ellipse(this.position.x, this.position.y, 2, 2);

  }
}
