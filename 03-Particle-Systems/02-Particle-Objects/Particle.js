class Particle {
  constructor(_position, _velocity, _acceleration) {
      this.position = _position.copy();
      this.velocity = _velocity.copy();
      this.acceleration = _acceleration.copy();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    // this.acceleration.mult(0);
  }

  show() {
    fill(255);
    ellipse(this.position.x, this.position.y, 25,25);
  }
}
