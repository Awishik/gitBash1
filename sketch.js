var monkey , monkey_running;
var banana ,bananaImage, rock, rockImage;
var bananaG, rockG;
var sc=0;
var survivalTime=0;


function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(150,300,20,20)
  monkey.addAnimation("sdfgh",monkey_running);
  monkey.scale=0.15
  
  ground=createSprite(0,360,50000,5)
  
  ground.velocityX=-1
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  bananaG= new Group();
  rockG= new Group();
}


function draw() {
  
  background("skyBlue");
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  monkey.collide(ground);
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
    bananas();
    obstacle();
  
  if(bananaG.isTouching(monkey)) {
    bananaG.destroyEach();
    score=score+2
  }
    if(rockG.isTouching(monkey)){
      ground.velocityX = 0;
      monkey.velocityY = 0;
      rockG.setVelocityXEach(0); 
      bananaG.setVelocityXEach(0);
      rockG.setLifetimeEach(-1); 
      bananaG.setLifetimeEach(-1);
      survivalTime=0;
    }
  
    stroke("orange")
    fill("yellow")
    textSize(20)
    textFont("Segoe Script")
    text("Score:"+score,500,30)
    
    stroke("blue")
    fill("blue")
    textSize(20)
    textFont("Segoe Script")
    text("Survival Time:"+survivalTime,200,30)
  
  drawSprites();
  }
  




function bananas() {
  if (frameCount%80===0) {
    banana=createSprite(620,120,20,20);
    banana.addImage("asdfghj",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-14;
    bananaG.add(banana);
    banana.y=Math.round(random(120,200));
    banana.lifetime=50;
  }
}


function obstacle () {
  
  if (frameCount%300===0) {
    rock=createSprite(620,320,20,20);
    rock.addImage("rock",rockImage);
    rock.scale=0.2
    rock.velocityX=-14
    rock.lifetime=300
    rockG.add(rock);
  }
}








