const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var wall1,ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = new Ground(400,100,300,30);
	ball1 = new Bob(300,300,50);
	ball2 = new Bob(350,300,50);
	ball3 = new Bob(400,300,50);
	ball4 = new Bob(450,300,50);
	ball5 = new Bob(500,300,50);
	rope1 = new Rope(ball1.body,wall1.body)
	rope2 = new Rope(ball2.body,wall1.body,-ball2*30,0)
	rope3 = new Rope(ball3.body,wall1.body)
	rope4 = new Rope(ball4.body,wall1.body)
	rope5 = new Rope(ball5.body,wall1.body)
	Engine.run(engine);
	//var chain1=Constraint.create(options)
   // World.add(world,chain1)
}


function draw() {
 // rectMode(CENTER);
  background("lavender");
  wall1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  keyPressed();
  strokeWeight(3)
  line(wall1.body.position.x-100,wall1.body.position.y,ball1.body.position.x,ball1.body.position.y-25)
  strokeWeight(3)
  line(wall1.body.position.x-50,wall1.body.position.y,ball2.body.position.x,ball2.body.position.y-25)
  strokeWeight(3)
  line(wall1.body.position.x,wall1.body.position.y,ball3.body.position.x,ball3.body.position.y-25)
  strokeWeight(3)
  line(wall1.body.position.x+50,wall1.body.position.y,ball4.body.position.x,ball1.body.position.y-25)
  strokeWeight(3)
  line(wall1.body.position.x+100,wall1.body.position.y,ball5.body.position.x,ball5.body.position.y-25)
  Pressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === "UP_ARROW"){
	//Matter.Body.setPosition(ball1.body,{x:260,y:450})
//	Matter.Body.setStatic(ball1.body,false)
	Matter.Body.applyForce(ball1.body,paper.ball1.position,{x:1100,y:330});
	//ball1.velocityX=-7;
	}

}

