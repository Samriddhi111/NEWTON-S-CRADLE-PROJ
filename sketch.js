
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof=new roof(width/2,200,350,20);
	ball1=new ball(400,400,40);
	ball2=new ball(440,400,40);
	ball3=new ball(480,400,40);
	ball4=new ball(320,400,40);
	ball5=new ball(360,400,40);

    console.log(ball1);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  drawSprites();
 
}



