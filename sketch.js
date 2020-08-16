// Create constants for Engine, World, etc.
const {Engine, World, Bodies, Body, Constraint} = Matter;

// Create all the global variables.
var engine, world;
var sling, ball;
var platform1, block1;
var flag = "ready";
var blocks = [];
var num = 15;
var score = 15 - num;
var shots = 0;

function setup() {
  // Create the canvas and define values for 'engine' and 'world'.
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  // Create the ball and slingshot
  ball = new Ball(125, 280, 15);
  sling = new Slingshot(ball.body, {x: 125, y: 270});

  // Create the platforms and blocks
  platform1 = new Platform(425, 370, 160, 15);
  block1 = new Block(375, 320, "b1");
  block2 = new Block(400, 320, "b2");
  block3 = new Block(425, 320, "b3");
  block4 = new Block(450, 320, "b4");
  block5 = new Block(475, 320, "b5");
  block6 = new Block(400, 295, "b6");
  block7 = new Block(425, 295, "b7");
  block8 = new Block(450, 295, "b8");
  block9 = new Block(425, 270, "b9");

  platform2 = new Platform(475, 210, 130, 15);
  block10 = new Block(450, 160, "b10");
  block11 = new Block(475, 160, "b11");
  block12 = new Block(500, 160, "b12");
  block13 = new Block(462.5, 135, "b13");
  block14 = new Block(488.5, 135, "b14");
  block15 = new Block(475, 110, "b15");
  blocks.push(block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15);
}

function draw() {
  // Set the background and update the Engine.
  background("black");
  Engine.update(engine);
  
  // Message to the viewer
  fill("white");
  textSize(16);
  textAlign(CENTER);
  text("Drag and release to launch the ball.", 150, 100);
  text("Press SPACE to reload.", 150, 125);
  if (score < blocks.length) {
    fill("yellow");
    text("Score: " + score*2 + " / 30", 148, 160);
  } else {
    textSize(30);
    fill(0, 210, 15);
    text("You won in just", 147, 165);
    text(shots+" shots !", 145, 200);
    textSize(16);
    fill("yellow");
    text("Refresh to play again", 145, 240);
  }

  //Display all the elements.
  sling.display();
  ball.display();
  platform1.display();
  platform2.display(); 
  for (i = 0; i < blocks.length; i++) {
    blocks[i].display();
  }

  // scoring
  num = 0;
  for (i = 0; i < blocks.length; i++) {
    if (blocks[i].checkPos()) {
      num++;
    }
  }
  score = 15-num;
}

function mouseDragged() {
  if (flag != "launched") {
    Body.setPosition(ball.body, {x: mouseX, y: mouseY});
    flag = "loading";
  }
}

function mouseReleased() {
  if (flag == "loading") {
    sling.release();
    flag = "launched";
    if (score < 15) {
      shots++;
    }
  }
}

function keyPressed() {
  if (keyCode == 32 && flag == "launched") {
    World.remove(world, ball.body);
    ball = new Ball(100, 280, 15);
    sling = new Slingshot(ball.body, {x: 100, y: 270});
    flag = "ready";
  }
}