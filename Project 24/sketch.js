const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10);
	ground = new Ground(400, 680, 800, 20);

	boxPosition=550;
	boxY=620;

	//Left
	boxLeftSprite=createSprite(boxPosition, boxY, 20, 100);
	boxLeftSprite.shapeColor=color("white");

	boxLeftBody= Bodies.rectangle(boxPosition+20, boxY, 20, 100, {isStatic:true});
	World.add(world, boxLeftBody);

	//Right
	boxRightSprite=createSprite(boxPosition+200, boxY, 20, 100);
	boxRightSprite.shapeColor=color("white");

	boxRightBody= Bodies.rectangle(boxPosition+200-20, boxY, 20, 100, {isStatic:true} );
	World.add(world, boxRightBody);

	//Base
	boxBaseSprite=createSprite(boxPosition+100, boxY+40, 200, 20);
	boxBaseSprite.shapeColor=color("white");

	boxBaseBody= Bodies.rectangle(boxPosition+100, boxY+40, 200, 20, {isStatic:true});
	World.add(world, boxBaseBody);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  ground.display();

  drawSprites();
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.postion, {x:15, y:-14})
	}
}
