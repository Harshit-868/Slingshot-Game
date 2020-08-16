class Slingshot {
  constructor(bodyA, pointB) {
  var options = {
    'bodyA': bodyA,
    'pointB': pointB,
    'length': 0.00001,
    'stiffness': 0.04
  }
  this.pointB = pointB;
  this.sling = Constraint.create(options);
  World.add(world, this.sling);
  }

  release() {
  if (flag == "loading") {
    this.sling.bodyA = null;
    flag = "launched";
  }
  }

  display() {
  if(this.sling.bodyA && flag == "ready" || flag == "loading"){
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.pointB;
    strokeWeight(5);
    stroke("white");
    fill("white");
    push();
    line(pointB.x - 25, pointB.y, pointA.x - 10, pointA.y);
    line(pointB.x + 25, pointB.y, pointA.x + 10, pointA.y);
    if (pointA.x < pointB.x - 10) {
    rect(pointA.x - 22, pointA.y - 10, 5, 25);
    }
    else if (pointA.x > pointB.x + 10) {
    rect(pointA.x + 15, pointA.y - 12, 5, 25);
    }
    if (pointA.y < pointB.y + 2) {
    rect(pointA.x - 13, pointA.y - 20, 25, 5);
    }
    else if (pointA.y > pointB.y - 10) {
    rect(pointA.x - 13, pointA.y + 15, 25, 5);
    }
    pop();
  }
  }
}