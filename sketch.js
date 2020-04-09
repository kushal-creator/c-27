const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,holder,ground,chain;


function setup() {
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
  
    var holder_option = {
      isStatic:true
    }
    var ground_option = {
      isStatic:true
    }
    var ball_option = {
      restitution:1,
      density:1
    }
    ground=Bodies.rectangle(200,330,400,20,ground_option);
    World.add(world,ground);

    holder=Bodies.rectangle(200,100,200,20,holder_option);
    World.add(world,holder);

    ball=Bodies.circle(220,200,30,ball_option);
    World.add(world,ball);

    var options = {
      bodyA:ball,
      bodyB:holder,
      length:100,
      stiffness:0.004

    } 

     chain=Constraint.create(options);
     World.add(world,chain);

}

function draw() {
  background(0);

  Engine.update(engine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  fill("blue");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,200,20);

  fill("green");
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30);

  strokeWeight(3);
  stroke("white");

  line(holder.position.x,holder.position.y,ball.position.x,ball.position.y);
  
  if(keyCode==32){
    ball.position.x=mouseX;
    ball.position.y=mouseY;

  }
  else if(keyCode==ENTER){
    ball.position.x=200;    

  }
}