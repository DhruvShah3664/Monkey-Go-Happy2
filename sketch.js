
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 500);
  
  
  monkey = createSprite(100, 400, 20, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(350, 400, 1000, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
  
  
  
  
}


function draw() {
  background("white");
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime: "+ survivalTime, 100, 50);
  
  
  
  if(keyDown("space")&& monkey.y >=350){
    monkey.velocityY = -20;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    FoodGroup.destroyEach();
    obstacle.velocityX = 0;
    obstacle.lifetime = -1;
  }
  
  
  
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
}

function spawnFood() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage("fruit", bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){

  if (frameCount % 300 === 0) {
    obstacle = createSprite(550, 380, 40, 40);
        
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    monkey.depth = obstacle.depth + 1;
    
    
    obstacleGroup.add(obstacle);


}
}



