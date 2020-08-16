class Block {
  constructor(x, y, name) {
    var options = {
      'friction': 0.2,
      'gravity': 0,
      'restitution': 0.15
    }
    this.body = Bodies.rectangle(x, y, 25, 25, options);
    this.width = 25;
    this.height = 25;
    this._name = name;
    this.inside = true;
    World.add(world, this.body);
  }

  checkPos() {
    if (this.body.position.x < width && this.body.position.y < height
      && this.body.position.x > 0 && this.body.position.y > 0) {
      this.inside = true;
    } else {
      this.inside = false;
      setInterval(5000, ()=>{World.remove(world, this.body)})
    }
    return this.inside;
  }

  display() {  
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle*3);
    rectMode(CENTER);
    fill(random(0, 225), random(0, 225), random(0, 225));
    strokeWeight(2.5);
    stroke("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
}