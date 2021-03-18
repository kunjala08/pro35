var Balloon
var database,position;
var balloonPosition
function setup() {
  database = firebase.database();
  createCanvas(800,400);
  Balloon = createSprite(400, 200, 50, 50);
  balloonPosition = database.ref('balloon/height') ;
  balloonPosition.on("value",readHeight,showError);console.log(balloonPosition)
}

function draw() {
  background(255,255,200);  
  if(keyDown(LEFT_ARROW)){
    Balloon.x=Balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    Balloon.x=Balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    Balloon.y=Balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    Balloon.y=Balloon.y+10;
  }
  text("** USE ARROWS KEYS TO MOVE THE HOT AIR BALLOONS",20,20)
  drawSprites();
}

function readHeight(data){
  height = data.val();
  balloonPosition.x = height.x;
  balloonPosition.y = height.y;
}
function upadateHeight(){
  database.ref('balloon/height').set({
    'x' : height.x+x,
    'y' : height.y+y
  })
}
function showError(){
  console.log("errors in database")
}