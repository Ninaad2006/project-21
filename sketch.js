var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
  thickness=random(22,83);
  wall=createSprite(400,200,thickness,height/2);

  speed=random(233,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5*speed*weight*speed/(thickness*thickness*thickness)
  if(damage>10){
wall.shapeColor=color(255,0,0)
bullet.velocityX=0;
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
    bullet.velocityX=0;
  }
}


      drawSprites();
}

function hasCollided(){

bulletRightEdge+bullet.x+bullet.width;
wallLeftEdge+wall.x
if(bullet.x>wall.x){
  return true
}
return false
}