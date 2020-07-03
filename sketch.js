var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	var options={
		isStatic:true
	}
	ground = Bodies.rectangle(400,680,800,20,options);
	World.add(world, ground);
	 
	ball = new Paper(100,600,30);
	dustbin1 = new Dustbin(500,600,200,50,600,600,50,200,400,600,50,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(ground.position.x, ground.position.y, 800,20);
  ball.displayPaper();
  dustbin1.displayDustbin();
  //console.log(ball.body.position.x)
  console.log(ball.body.position.y)
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW&&(ball.body.position.x>=95&&ball.body.position.x<=100)&&(ball.body.position.y>=630&&ball.body.position.x<=650)){
		var options={
			x:0.1,
			y:-0.123
		}
		Body.applyForce(ball.body,ball.body.position,options);
	}
}