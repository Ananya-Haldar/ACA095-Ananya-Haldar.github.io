var block1,block2,block3,block4,block5,block6,block7,block8,block9,player,tower;
var player_img,tank,tank2,tower_img;
var bg;

function preload(){
  player_img = loadImage("soldier.png");
  tank= loadImage("tank.png");
  tank2=loadImage("tank2.png");
  tower_img=loadImage("tower.png");
  bg=loadSound("bgm.wav");
}

function setup() {
  createCanvas(400, 400);
  
  block1= createSprite(320,350,80,10);
  block2= createSprite(150,300,80,10);
  block3= createSprite(110,210,80,10);
  block4= createSprite(270,250,80,10);
  block5= createSprite(100,110,80,10);
  block6= createSprite(220,160,80,10);
  block7= createSprite(200,60,80,10);
  block8= createSprite(300,110,80,10);
  block9 = createSprite(80,370,80,10);

  block2.addImage(tank);
  block2.scale=0.1;
  block4.addImage(tank);
  block4.scale=0.1;
  block6.addImage(tank);
  block6.scale=0.1;
  block8.addImage(tank);
  block8.scale=0.1;
  block9.addImage(tank);
  block9.scale=0.1;
  
  block1.addImage(tank2);
  block1.scale=0.1;
  block3.addImage(tank2);
  block3.scale=0.1;
  block5.addImage(tank2);
  block5.scale=0.1;
  block7.addImage(tank2);
  block7.scale=0.1;

  player = createSprite(380,380,10,20);
  
  player.addImage(player_img);
  player.scale=0.07;
  
  
  tower = createSprite(30,50,10,50);
  tower.addImage(tower_img);
  tower.scale=0.2;
  
  bg.play();
}

function draw() {
  background(220);

  edges=createEdgeSprites();
  player.bounceOff(edges);
  
 //control the player
if (keyDown("left")) {
  player.x=player.x-2;
}
if (keyDown("right")) {
  player.x=player.x+2;
}
if (keyDown("up")) {
  player.y=player.y-2;
}
if (keyDown("down")) {
  player.y=player.y+2;
}

if(player.isTouching(block2) ||player.isTouching(block4)||
player.isTouching(block6)||player.isTouching(block8)||
   player.isTouching(block9)){
    
    background("red");
      fill("yellow")
      textSize(30)
      text("You have been captured",50,200)
  bg.stop();
 player.velocityX=0;
 player.velocityY=0;
  }
  
if(player.isTouching(block1) ||player.isTouching(block3)||
    player.isTouching(block5)||player.isTouching(block7)){
    player.bounceOff(block1);
    player.bounceOff(block3);
    player.bounceOff(block5);
    player.bounceOff(block7);
  }
    drawSprites()
  if(player.isTouching(tower)){
    
    background("green");
    fill("white");
    textSize(30)
    text("Mission Accomplished",50,200);
    text("Hostage Rescued",50,250)
    player.velocityX=0;
    player.velocityY=0;
  }

}