var path, pathImg;
var runner, runnerImg, edges, boarder1, boarder2;



function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png")
  
}


function setup(){
  createCanvas(400,600);

  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.y=path.height/30
  path.scale=1.2
  runner=createSprite(100,20,54,100)
  runner.addAnimation("running",runnerImg)
  edges=createEdgeSprites()
  
  runner.scale=0.1
  runner.x=300
  runner.y=300
  boarder1=createSprite(10,370,10,600)
  boarder2=createSprite(380,300,10,600)
  boarder1.visible=false
  boarder2.visible=false



}

function draw() {
background(pathImg)
  
  path.velocityY=4
  runner.x=World.mouseX

  if(path.y > 400){
  path.y = height/2;
}



runner.collide(boarder1)
runner.collide(boarder2)

drawSprites()

}


