
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(50,400,20);

	box1 = new Box(850,530,20,120);
	box2 = new Box(1020,530,20,120);
	box3 = new Box(935,580,150,20);


	var options1 = {
		isStatic:true
	}

	ground = Bodies.rectangle(600,600,1200,20,options1);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  background(0)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
 function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
 }


