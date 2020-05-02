const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1,box2,box3,box4
var flag1,flag2
var building1


function setup() {
  var canvas = createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(700,580,1400,30);
  box1 = new Pillar(400,200,100,400);
  box2 = new Pillar(800,200,100,400);
  box3 = new Pillar(260,200,100,200);
  box4 = new Pillar(945,200,100,200);
  flag1 = new Pillar(400,10,20,100);
  flag2 = new Pillar(800,10,20,100);
  flag3 = new Pillar(260,10,20,100);
  flag4 = new Pillar(945,10,20,100);
  building1 = new Pillar(600,300,230,500);

}

function draw() {
  background(0);
  Engine.update(engine);  

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  flag1.display();
  flag2.display();
  flag3.display();
  flag4.display();
  building1.display();
  
}