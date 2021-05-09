var fixedrect, movingrect;
var g1,g2,g3,g4;



function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 50);
  fixedrect.shapeColor=("green");
  fixedrect.debug=true;

  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor=("green");
  movingrect.debug=true;
  g1=createSprite(100,100,50,50);
  g1.shapeColor=("green");
  g2=createSprite(200,100,50,50);
  g2.shapeColor=("green");
  g3=createSprite(300,100,50,50);
  g3.shapeColor="green";
  g4=createSprite(400,100,50,50);
  g4.shapeColor="green";

}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(istouching(movingrect,g1)){
    g1.shapeColor=("red");
    movingrect.shapeColor=("red");
  }
  else{
    g1.shapeColor=("green");
    movingrect.shapeColor=("green");
  }
  if(istouching(movingrect,g2)){
    g2.shapeColor=("yellow");
    movingrect.shapeColor=("red");
  }
  else{
    g2.shapeColor=("green");
    movingrect.shapeColor=("green");
  }
  drawSprites();
}
function istouching(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-fixedrect.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
  }
else{
  return false;
}
}