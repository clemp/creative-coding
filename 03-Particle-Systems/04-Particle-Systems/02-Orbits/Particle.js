class Particle {
  constructor(_position) {
      this.position = _position.copy();
      this.velocity = createVector(0.2, 3);
      this.acceleration = createVector(0, 0);
      this.mass = 15;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    // f = ma -> f/m = a
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  show() {
    // noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, this.mass, this.mass);
  }
}
