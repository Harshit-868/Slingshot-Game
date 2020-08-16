class Ball {
  constructor(x, y, radius) {
    var options = {
      'frictionAir': 0,
      'restitution': 0.75
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(this.body, angle);
    ellipseMode(CENTER);
    stroke("red");
    fill("red");
    ellipse(0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
}