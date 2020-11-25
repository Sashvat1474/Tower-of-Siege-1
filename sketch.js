var a;
var circles=[];
var polygon;
var block,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16;


function preload(){

polygon=loadImage("polygon.png")

}
function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
  polygon=createSprite(100,750,20,20);

  block1=createSprite(398,400,20,40);

  block2=createSprite(352,400,20,40);

  block3=createSprite(375,360,20,40);

  block4=createSprite(375,400,20,40);

  block5=createSprite(327,440,20,40);

  block6=createSprite(350,440,20,40);

  block7=createSprite(373,440,20,40);

  block8=createSprite(396,440,20,40);

  block9=createSprite(419,440,20,40);

  block10=createSprite(304,480,20,40);
  
  block11=createSprite(327,480,20,40);

  block12=createSprite(350,480,20,40);

  block13=createSprite(373,480,20,40);

  block14=createSprite(396,480,20,40);

  block15=createSprite(419,480,20,40);

  block16=createSprite(442,480,20,40);

border=createSprite(380,507,300,10)
  
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  

  polygon.x=mouse.x;

  polygon.y=mouse.y;

  block2.shapeColor="cyan";

  block1.shapeColor="cyan";

  block4.shapeColor="cyan";

  block5.shapeColor="magenta";

  block6.shapeColor="magenta";

  block7.shapeColor="magenta";

  block8.shapeColor="magenta";

  block9.shapeColor="magenta";

  block10.shapeColor="blue";

  block11.shapeColor="blue";

  block12.shapeColor="blue";

  block13.shapeColor="blue";

  block14.shapeColor="blue";

  block15.shapeColor="blue";

  block16.shapeColor="blue";

  border.shapeColor="red";

  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 