
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dustbinSide1, dustbinSide2, dustbinSide3;

function setup() {
  createCanvas(2400, 1000);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(1000, 900, 4000, 50);
  paper = new Paper(200, 100, 50);

  dustbinSide1 = new Dustbin(1840, 775, 20, 200);
  dustbinSide2 = new Dustbin(2100, 865, 500, 20);
  dustbinSide3 = new Dustbin(2350, 775, 20, 200);

  Engine.run(engine);

}


function draw() {
  
 
  
  // rectMode(CENTER);
  background("orange");
  //Engine.update(engine);
  ground.display();
  paper.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();
  //drawSprites();
}

function keyPressed() { 
  if (keyCode === UP_ARROW) { Matter.Body.applyForce(paper.body, paper.body.position, { x: 790, y: -790 }); }
 }