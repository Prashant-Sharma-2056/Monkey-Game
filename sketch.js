
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){ 
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,300);
  
  //Ground
  ground=createSprite(80,270,1100,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  
  //Monkey
  monkey=createSprite(80,230,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.125;
  
  //Groups
  FoodGroup=new Group();
}

function draw() {
  background("white");
  drawSprites();
  
  //Infinite Ground
  if (ground.x>0){
    ground.x=ground.width/2;
  }
  
  //Jump Monkey
  if (keyDown("space")&&monkey.y>=226){
    monkey.velocityY=-15;
  }
  
  //Gravity
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  //Bananas
  if (frameCount%80===0){
    food();
  }
  
  //Obstacles
  if (frameCount%300===0){
    obstacle=createSprite(600,250,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-(5+score/5);
    obstacle.lifetime=120;
  }
  
  //Scoreboard
  fill("black");
  textSize(15);
  text("Survival Time:  "+score,480,50);
}

function food(){
  banana=createSprite(600,Math.round(random(100,150)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-(5+score/5);
  FoodGroup.add(banana);
  banana.lifetime=120;
}