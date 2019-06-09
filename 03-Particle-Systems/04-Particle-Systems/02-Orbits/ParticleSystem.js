// https://medium.com/@patrickferris17/teach-physics-and-programming-from-the-browser-4e22229d8a0a
class ParticleSystem {
  constructor(_x, _y, _mass, _num_particles) {
      this.origin = createVector(_x, _y);
      this.mass = _mass;
      this.n = _num_particles;
      this.particles = [];
      this.iterations = 0;
  }
  // Initialize with generate function.
  generate() {
    let dist = this.mass + 20;
    let theta = 0;
    let change = createVector(dist, theta);
    // Create the initial state (Step 0) of all particles in the system.
    for (var i = 0; i < this.n; i++) {
      let pos = this.origin.copy();
      pos.add(change);
      change.mult(2);
      // let pos = center.add(change.mult(i + 1));
      this.particles.push(new Particle(pos));
    }
  }
  // Create motion with physics functions.
  attractOrbit(particle) {
    // console.log("test1")
    // console.log(get_distance(this.origin, particle.position));
    // if (get_distance(this.origin, particle.position) <= 200) {
      // console.log("test2");
      // let force = createVector(1, 0);
      let force = centripetalForce(this.origin, particle);
      particle.applyForce(force);
      console.log(force);
      // particle.applyForce(centripetalForce(this.origin, particle));
    // }
  }
  // Visualize the system.
  showParticles() {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }

  showOrigin() {
    fill(255);
    ellipse(this.origin.x, this.origin.y, this.mass, this.mass);
  }
  // Update each iteration.
  update() {
    // For each particle..
    for (var i = 0; i < this.particles.length; i++) {
      // console.log("test");
      this.attractOrbit(this.particles[i]); // Calculate orbital attraction.
      this.particles[i].update();
      this.particles[i].show();
    }
    this.iterations += 1;
    // console.log(this.iterations);
  }
}

function centripetalForce(attractor, orbiter) {
  let force = p5.Vector.sub(attractor, orbiter.position).normalize();
  let radius = p5.Vector.sub(attractor, orbiter.position).mag();
  let velsquared = p5.Vector.dot(orbiter.velocity, orbiter.velocity);

  force.mult(velsquared);
  force.mult(orbiter.mass);
  force.mult(1/radius);
  // console.log(force);
  return force;
}

function get_distance(point1, point2) {
  return p5.Vector.sub(point1, point2).mag();
}
