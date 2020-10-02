var fixedRect, movingRect;
var a, b;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,50,80);
  movingRect.shapeColor = "green";
  a = createSprite(300,100,50,80);
  a.shapeColor = "green";
  b = createSprite(500,100,50,80);
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  

  if(isTouching(movingRect, a)){
    movingRect.shapeColor = "red";
    a.shapeColor = "red";
  }
  
  else{
    movingRect.shapeColor = "green";
    a.shapeColor = "green";
  }

  drawSprites();
}

