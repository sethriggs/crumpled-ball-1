
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground, paper1;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new dustbin(300,320,80,30);
    box2 = new dustbin(200,320,20,200);
    box3 = new dustbin(300,320,80,30);

	paper1 = new paper();
 
	ground1 = new ground();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


 box1.display();
 box2.display();
 box3.display();

 paper1.display();
 ground1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed()
{
 if (key === UP_ARROW) {
 
	Matter.Body.applyForce(paper1.body,paper1.body,{x:85,y:85});

 }

}


