const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;



function setup(){
createCanvas(1200,600)
engine=Engine.create()
world=engine.world
ground1=new ground(600,580,1200,20);
box1=new AdityaBox(730,500,80,80)
box2=new AdityaBox(730,420,80,80)
box3=new AdityaBox(750,360,80,80)
box4=new AdityaBox(760,360,80,80)
box5=new AdityaBox(800,400,80,80)
box6=new AdityaBox(830,430,80,80)
box7=new AdityaBox(650,430,80,80)
box8=new AdityaBox(650,360,80,80)
box9=new AdityaBox(650,310,80,80)
}
function draw(){
background("lightblue")
Engine.update(engine)
text(mouseX+"   "+mouseY,mouseX,mouseY)
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
}