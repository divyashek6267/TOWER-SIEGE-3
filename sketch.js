const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,ground;
var stand0,stand1;
var polygon;
var slingshot;
var polygon_img;
var bg12

function preload(){
  getBackgroundImage();
  polygon_img=loadImage("polygon.png")
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground=new Ground(500,400,1100,40)
  stand0 = new Stand(390,300,250,10);
  stand1 = new Stand(700,200,200,10);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,190,30,40);
  block14 = new Block(390,190,30,40);
  block15 = new Block(420,190,30,40);

  block16=new Block(390,180,30,40);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
 
  blocks9 = new Block(700,95,30,40);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);


  slingshot = new Slingshot(this.polygon,{x:100,y:200});
  //getBackgroundImage();
}

function draw() {
  if(bg12){
  background(bg12); 
  }

  
  textSize(20);
  fill("red")
  text("Drag the Hexagonal Stone and Release it, To Launch it Towards The Blocks",100,30);
  textSize(10)
  fill("light grey")
  text("Press Space to get a second Chance to Play!!",650 ,350);

  fill("lightblue");
  ground.display(); 
  stand0.display();
  stand1.display();
  
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(this.polygon);
  }
}

async function getBackgroundImage(){
  
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,16);
   // console.log(hour);

   if(hour >=06 && hour <=18){
     bg = "sprites/light.jpg"
   }
   else{
     bg="sprites/unnamed.png";
   }
   bg12 = loadImage(bg)
}